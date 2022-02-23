# SEO Object

## SEO title (40-60 char)

```html
<title>This is the title of the page.</title>
```

This is the page title that Google and most other search engines show in search results.

## SEO description (60-140 char)

```html
<meta name="description" content="Place the meta description text here." />
```

The meta description summarizes the page’s content. Search engines often use it for the snippet in search results.

## SEO Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

A meta viewport tag sets the visible area of a web page. It is used to instruct the browser how to render the page on different screen sizes (i.e., desktop/tablet/mobile).

## SEO Charset (UTF-8)

```html
<meta charset="UTF-8" />
```

The meta charset tag sets the character encoding for the web page. In other words, it tells the browser how the text on your web page should be displayed.

## SEO Robots

```html
<meta name="”robots”" content="noindex, nofollow" />
<meta name="”robots”" content="index, follow" />
<meta name="”robots”" content="noindex, follow" />
<meta name="”robots”" content="index, nofollow" />
```

The meta robots tag tells search engines if they should crawl your web pages. Use only when you want to stop google searching for this content

## SEO meta refresh

```html
<!-- The content attribute specifies the time delay in seconds. The URL attribute specifies the redirect URL. -->
<meta http-equiv="refresh" content="5;url="https://example.com/">
```

A meta refresh tag tells the web browser to redirect the user to a different URL after a set amount of time.

# OpenGraph Object

## Title (40-60 char)

```html
<meta
  property="og:title"
  content="Open Graph Meta Tags: Everything You Need to Know"
/>
```

- Add it to all “shareable” pages.
- Focus on accuracy, value, and clickability.
- Keep it short to prevent overflow. There’s no official guidance on this, but 40 characters for mobile and 60 for desktop is roughly the sweet spot.
- Use the raw title. Don’t include branding (e.g., your site name).

## URL

```html
<meta
  property="og:url"
  content="https://ahrefs.com/blog/open-graph-meta-tags/"
/>
```

Use the canonical URL. It helps consolidate all connected data, such as likes, across all the duplicate URLs posted.

## Image

```html
<meta
  property="og:image"
  content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg"
/>
```

- Use custom images for “shareable” pages (e.g., homepage, articles, etc.)
- Use your logo or any other branded image for the rest of your pages.
- Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices.

## Type

```html
<meta property="og:type" content="article" />
<meta property="og:type" content="website" />
```

- Use article for articles and website for the rest of your pages.
- Describe object types [further](https://ogp.me/#types) where appropriate (optional).

## Description (60-140 char)

```html
<meta
  property="og:description"
  content="Learn about 13 features that set Ahrefs apart from the competition."
/>
```

- Complement the title to make the snippet as appealing and click-worthy as possible.
- Copy your meta description here if it makes sense.
- Keep it short and sweet. Facebook recommends 2–4 sentences, but that often truncates.

## Locale

```html
<meta property="og:locale" content="en_AU" />
```

## Size

```html
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```
