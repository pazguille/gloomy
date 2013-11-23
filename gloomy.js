(function (window) {
    'use strict';

    var regexp = new RegExp('\\:\\[([a-zA-Z0-9.]+)\\]', 'gm');

    function render(tpl, data) {

        return tpl.innerHTML.replace(regexp, function () {
            var key = arguments[1],
                keys = key.split('.'),
                value;


            function defineValue(k) {
                value = value[k];
            }

            if (keys.length > 1) {
                value = data;
                keys.forEach(defineValue);
            }

            value = (data[key] !== undefined) ? data[key] : value;

            return value;
        });
    }

    function Gloomy(template, container, data) {

        if (template) {
            this.use(template);
        }

        if (container) {
            this.into(container);
        }

        if (data) {
            this.render(data);
        }

        return this;
    }

    Gloomy.prototype.use = function (template) {
        this.template = template;

        return this;
    };

    Gloomy.prototype.into = function (container) {
        this.container = container;

        return this;
    };

    Gloomy.prototype.render = function (data) {
        var that = this,
            html = [];

        data = Array.isArray(data) ? data : [data];

        data.forEach(function (data) {
            html.push(render(that.template.cloneNode(true), data));
        });

        this.container.innerHTML = html.join('');

        return this;

    };

    /**
     * Expose Gloomy
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('Gloomy', [], function () {
            return Gloomy;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = Gloomy;

    // Default
    } else {
        window.Gloomy = Gloomy;
    }

}(this));