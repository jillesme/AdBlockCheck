# AdBlockDetect v1.0

Do you have a site with ads that want people to see? **AdBlockDetect** to the rescue! This is a 1KB module for detecting AdBlock with async callbacks for notifying visitors.

It's up to you if you provide a simple hint that you'd like your visitors to see ads or prompt them with an alert.

## Usage

I recommend adding the script tags before the _\</body>_ tag [(source)](https://developer.yahoo.com/performance/rules.html#js_bottom).

_adblock.check()_ accepts 2 parameters: A callback function and an optional delay. 

```html
<script src="adblockcheck.js"></script>
<script>
adblock.check(function (active) {
    if (active) {
        // AdBlock is currently enabled
    }
}, 500);
</script>
```

## Demo

You can see a demo on jsfiddle.net [here](http://jsfiddle.net/jillesme/ejq98wem/)!
