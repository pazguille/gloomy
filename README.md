# gloomy

A simple and semantic substitution template engine for the browser. :[

## How-to

### Templates
Write your templates by using plain HTML in a `<script>` element. You must put your variables as a gloomy expressions (e.g. `:[foo.bar]`).

```html
<script id="user-template" type="text/gloomy">
    <li id=":[id]" class="user-box">
        <h2 class="user-box-title">
            <a href=":[website]">:[user.fullname]</a>
        </h2>
        <img src=":[user.pic]" width="80" height="80" alt=":[user.fullname]" class="user-box-avatar">
        <a href="https://twitter.com/:[username]">@:[username]&lt;/a>
    </li>
</script>
```

### Data
Create your `data` as JSON objects.

```js
var user = [
    {
        'id': 1,
        'username': 'pazguille',
        'website': 'http://pazguille.me',
        'user':{
            'fullname': 'Guille Paz',
            'pic': 'http://twitter.com/api/users/profile_image/pazguille?size=bigger'
        }
    },
    {
        'id': 2,
        'username': 'frontendrescue',
        'website': 'http://uptodate.frontendrescue.org/',
        'user':{
            'fullname': 'Front-end Rescue',
            'pic': 'http://twitter.com/api/users/profile_image/frontendrescue?size=bigger'
        }
    }
];
```

### Render

You should create a `container` to put the template with rendered data:
```html
<ul id="user-list"></ul>
```

Then, create a new instance of `Gloomy` and enjoy!

```js
var template = document.querySelector('#user-template'),
    container = document.querySelector('#user-list'),
    gloomy = new Gloomy(template, container);

gloomy.render(data);
```

[View demo page](http://pazguille.github.io/gloomy/)

## API

### Gloomy([template], [container], [data])
Create a new instance of `Gloomy`.
- `template`: A given gloomy template.
- `container`: A given HTMLElement to put the template.
- `data`: A given data to render.

```js
var gloomy = new Gloomy(template, container, data);
```

### Gloomy#use(template)
Sets what gloomy template would you to use.
- `template`: A given gloomy template.

```js
gloomy.use(template);
```

### Gloomy#into(container)
Sets a container to put the rendered template.
- `container`: A given HTMLElement to put the template.

```js
gloomy.into(container);
```

### Gloomy#render(data)
Render a given data with a template into a container.
- `data`: A given data to render.

```js
gloomy.render(data);
```

## Maintained by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Licensed under the MIT license.

Copyright (c) 2013 [@pazguille](http://twitter.com/pazguille).
