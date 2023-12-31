let mix = require('laravel-mix');

class LaravelMixTailwind {

    dependencies() {
        this.requiresReload = ` Tailwind has now been installed. Please ensure that
                                your tailwind.js configuration file (node_modules/.bin/tailwind init)
                                has been created, and then run "npm run dev" again.`;

        return ['tailwindcss'];
    }

    register(configPath = './tailwind.config.js') {
        this.configPath = configPath;
    }

    boot() {
        if(Mix.components.has('saas')) {
            Config.processCssUrls = false;
        }

        let tailwindcss = require("tailwindcss");

        Config.postCss.push(tailwindcss(this.configPath))
    }
}

mix.extend('tailwind', new LaravelMixTailwind());
