---
layout: page-fullwidth.liquid
title: 10-kompisar
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>

<script>
function newTask() {
    jQuery("#question").text(1 + parseInt(Math.random() * 9));
    jQuery("#answer").val("").focus();
}

jQuery(function () {
    newTask();
    jQuery(this).parent().hide();
    jQuery("#answer").change(function () {
        if (parseInt(jQuery("#question").text()) + parseInt(jQuery(this).val()) == 10) {
            jQuery("#correct").text(parseInt(jQuery("#correct").text()) + 1);
        }
        else {
            jQuery("#wrong").text(parseInt(jQuery("#wrong").text()) + 1);
        }
        newTask();
    });
});
</script>

<h1 id="task" style="line-height: 50px; font-size: 50px">
	<span id="question">?</span>
	 + 
	 <input id="answer" style="border: 3px solid Yellow; font-size: 50px; width: 100px" />
	  = 10
</h1>

<p>&nbsp;</p>

<h1 style="color: Green">
    Riktigt: <span id="correct">0</span>
</h1>

<p>&nbsp;</p>

<h1 style="color: Red">
    Fel: <span id="wrong">0</span>
</h1>
