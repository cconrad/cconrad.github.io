---
author:
  display_name: Claus Conrad
  email: webmaster@clausconrad.com
  login: claus
  url: ''
author_email: webmaster@clausconrad.com
author_login: claus
comments: true
date: 2010-10-18 18:39:10 +02:00
date_gmt: 2010-10-18 16:39:10 +0000
excerpt: Some details about the blog API in CommunityServer 2008.
header: 'no'
published: true
sidebar: left
status: publish
tags:
  - communityserver
  - development
title: CommunityServer 2008.5 Blogs API reference
wordpress_id: 332
wordpress_url: http://www.clausconrad.com/?p=332
---
### Blogs

#### **GET /api/blogs.ashx/blogs/**

Returns a paged list of all blogs visible to the current user.

#### Response

```
Status: 200 OK
 <bloglist>
  <blog>...</blog> 
  ...
</bloglist>
```

#### Parameters

| PageSize | Integer | Number of blogs per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### **GET /api/blogs.ashx/blogs/**{blogId}

Returns data about a specific blog.

#### Response

```
Status: 200 OK
  <blog>...</blog> 
```

#### **GET /api/blogs.ashx/blogs/**{blogKey}

Returns data about a specific blog.

#### Response

```
Status: 200 OK
  <blog>...</blog>
```

#### **GET /api/blogs.ashx/blogs/**{blogQuery}

Returns a paged list of blogs matching the query parameter(s) visible to the current user.

#### Response

```
Status: 200 OK
 <bloglist>
  <blog>...</blog> 
  ...
</bloglist>
```

#### Parameters

| Name | String | Name or part of the name of the blog. Wildcard character is "%". | Optional |
| IsActive | Boolean | Whether the blog is active | Optional |
| AccessLevel | Enum | "View", "Post" | Optional |
| Ids | Integer[] | Comma-separated list of blog IDs. | Optional |
| Keys | String[] | Comma-separated list of blog keys. | Optional |
| GroupIDs | Integer[] | Comma-separated list of blog group IDs | Optional |
| SortBy | String | Can be set to "Name", "LastPost", "Post", "SortOrder" or "Thread" | Optional |
| Order | String | The sort order for the "SortBy" parameter. Can be set to "Ascending" or "Descending". | Optional |
| PageSize | Integer | Number of blogs per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### **GET /api/blogs.ashx/blogs/**{blogId}/members

Returns a list of members of the specified blog.

#### Response

```
Status: 200 OK
 <membershiplist>
  <member>...</member>
  ...
</membershiplist>
```

#### GET /api/blogs.ashx/blogs/{blogId}/members/{userId}

Returns the specified member of the specified blog.

#### Response

```
Status: 200 OK
  <member>...</member>
```

#### GET /api/blogs.ashx/blogs/{blogId}/posts

Returns a paged list of posts in the specified blog.

#### Response

```
Status: 200 OK
 <blogpostlist>
  <blogpost>...</blogpost> 
  ...
</blogpostlist>
```

#### Parameters

| PageSize | Integer | Number of posts per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}

Returns the specified post in the specified blog.

#### Response

```
Status: 200 OK
  <blogpost>...</blogpost> 
```

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}/comments

Returns a paged list of comments for the specified post in the specified blog.

#### Response

```
Status: 200 OK
 <commentlist>
  <comment>...</comment> 
  ...
</commentlist>
```

#### Parameters

| PageSize | Integer | Number of comments per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}/comments/{blogPostCommentId}

Returns the specified comment for the specified post in the specified blog.

#### Response

```
Status: 200 OK
  <comment>...</comment> 
```

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}/trackbacks

Returns a paged list of trackbacks for the specified post in the specified blog.

#### Response

```
Status: 200 OK
 <trackbacklist>
  <trackback>...</trackback> 
  ...
</trackbacklist>
```

#### Parameters

| PageSize | Integer | Number of trackbacks per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}/trackbacks/{trackbackId}

Returns the specified trackback for the specified post in the specified blog.

#### Response

```
Status: 200 OK
  <trackback>...</trackback>
```

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}/ratings

Returns a list of ratings for the specified post in the specified blog.

#### Response

```
Status: 200 OK
 <ratinglist sum="X" average="Y">
  <rating>...</rating>
  ...
</ratinglist>
```

#### GET /api/blogs.ashx/blogs/{blogId}/posts/{blogPostId}/ratings/{username}

Returns rating by user with {username} for the specified post in the specified blog.

If the user doesn't exist or didn't rate the post, the whole list of ratings for the specified post is returned!

#### Response

```
Status: 200 OK
 <int>
  X
</int>
```

### Blog Posts

#### GET /api/blogs.ashx/posts/{blogPostId}

Returns the specified post.

#### Response

```
Status: 200 OK
  <blogpost>...</blogpost>
```

#### **GET /api/blogs.ashx/posts/{blogPostQuery}**

Returns a paged list of posts matching the query parameter(s) visible to the current user.

#### Response

```
Status: 200 OK
 <blogpostlist>
  <blogpost>...</blogpost> 
  ...
</blogpostlist>
```

#### Parameters

| IsActive | Boolean | Whether the post is active | Optional |
| BlogIds | Integer[] | Comma-separated list of blog IDs. | Optional |
| Keywords | String[] | Comma-separated list of keywords. All keywords must be matched. | Optional |
| SortBy | String | Can be set to "MostComments", "MostRecent" or "MostViewed" | Optional |
| Order | String | The sort order for the "SortBy" parameter. Can be set to "Ascending" or "Descending". | Optional |
| PageSize | Integer | Number of posts per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### GET /api/blogs.ashx/posts/{blogPostId}/comments

Returns a paged list of comments for the specified post.

#### Response

```
Status: 200 OK
 <commentlist>
  <comment>...</comment> 
  ...
</commentlist>
```

#### Parameters

| PageSize | Integer | Number of comments per page | Optional |
| PageIndex | Integer | Page number | Optional |

#### GET /api/blogs.ashx/posts/{blogPostId}/trackbacks

Returns a paged list of trackbacks for the specified post.

#### Response

```
Status: 200 OK
 <trackbacklist>
  <trackback>...</trackback> 
  ...
</trackbacklist>
```

#### Parameters

| PageSize | Integer | Number of trackbacks per page | Optional |
| PageIndex | Integer | Page number | Optional |

### Blog Comments

#### GET /api/blogs.ashx/comments/{blogPostCommentId}

Returns the specified comment.

#### Response

```
Status: 200 OK
  <comment>...</comment>
```

####   

PUT /api/blogs.ashx/comments/

Creates the sent comment.

#### Request

```
<comment>...</comment>
```

#### **GET /api/blogs.ashx/comments/{blogPostCommentQuery}**

Returns a paged list of comments matching the query parameter(s) visible to the current user.

#### Response

```
Status: 200 OK
 <commentlist>
  <comment>...</comment> 
  ...
</commentlist>
```

#### Parameters

| IsActive | Boolean | Whether the comment is active | Optional |
| PostId | Integer | ID of a blog post. If specified, only comments for that post are shown. | Optional |
| Keywords | String[] | Comma-separated list of keywords. All keywords must be matched. | Optional |
| PageSize | Integer | Number of comments per page | Optional |
| PageIndex | Integer | Page number | Optional |

### Blog Trackbacks

#### GET /api/blogs.ashx/trackbacks/{trackbackId}

Returns the specified trackback.

#### Response

```
Status: 200 OK
  <trackback>...</trackback>
```

#### **GET /api/blogs.ashx/trackbacks/{trackbackQuery}**

Returns a paged list of trackbacks matching the query parameter(s) visible to the current user.

#### Response

```
Status: 200 OK
 <trackbacklist>
  <trackback>...</trackback> 
  ...
</trackbacklist>
```

#### Parameters

| PostId | Integer | ID of a blog post. If specified, only trackbacks for that post are shown. | Optional |
| Keywords | String[] | Comma-separated list of keywords. All keywords must be matched. | Optional |
| PageSize | Integer | Number of trackbacks per page | Optional |
| PageIndex | Integer | Page number | Optional |

### Blog Groups

**GET /api/blogs.ashx/bloggroups/**

Returns a list of all blog groups visible to the current user.

#### Response

```
Status: 200 OK
 <bloggrouplist>
  <bloggroup>...</bloggroup> 
  ...
</bloggrouplist>
```

**GET /api/blogs.ashx/bloggroups/{blogGroupId}**

Returns data about the specified blog group.

#### Response

```
Status: 200 OK
  <bloggroup>...</bloggroup> 
```
