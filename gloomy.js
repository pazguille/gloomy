/*!
 * Gloomy v1.0.0
 * A simple and semantic substitution template engine for the browser.
 * Project: https://github.com/pazguille/gloomy
 * Copyright (c) 2013, by @pazguille (http://pazguille.me)
 * Released under the MIT license.
 */
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

    /**
     * Creates a new instance of `Gloomy`.
     * @param {HTMLElement} [template] - A given gloomy template.
     * @param {HTMLElement} [container] - A given HTMLElement to insert the result of a template rendered with the data.
     * @param {Array} [data] - A given model data to render.
     * @returns {gloomy} Returns a new instance of Gloomy.
     */
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

    /**
     * Sets what gloomy template would you to use.
     * @param {HTMLElement} [template] - A given gloomy template.
     * @returns {gloomy} Returns an instance of Gloomy.
     */
    Gloomy.prototype.use = function (template) {
        this.template = template;

        return this;
    };

    /**
     * Sets a container to insert the result of a template rendered with the data.
     * @param {HTMLElement} [container] - A given HTMLElement to insert the result of a template rendered with the data.
     * @returns {gloomy} Returns an instance of Gloomy.
     */
    Gloomy.prototype.into = function (container) {
        this.container = container;

        return this;
    };

    /**
     * Render the template with a given data and inserts the output in a container.
     * @param {Array} data - A given model data to render.
     * @returns {gloomy} Returns an instance of Gloomy.
     */
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