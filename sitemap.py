from openpyxl import load_workbook
import requests as req

wb = load_workbook("/mnt/c/Users/mail/OneDrive/Personal/Internal/www.clausconrad.com.20221229.Sitemap.xlsx")
ws = wb.active

current_row = 2

while ws[f"A{current_row}"].value:
    url = ws[f"A{current_row}"].value
    r = req.get(url, allow_redirects=False)
    ws[f"B{current_row}"].value = r.status_code
    ws[f"C{current_row}"].value = r.headers.get("Location", None)
    current_row += 1

wb.save("/mnt/c/Users/mail/OneDrive/Personal/Internal/www.clausconrad.com.20221229.Sitemap.xlsx")
