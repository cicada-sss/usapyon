    var MutekiTimer = (function() {
        var MutekiTimer = function() {
            initialize.apply(this, arguments);
        }, $this = MutekiTimer.prototype;

        var TIMER_PATH = (function() {
            var BlobBuilder, URL, builder;
            BlobBuilder = self.WebKitBlobBuilder || self.MozBlobBuilder;
            URL = self.URL || self.webkitURL;
            if (BlobBuilder && URL) {
                builder = new BlobBuilder();
                builder.append("var timerId = 0;");
                builder.append("this.onmessage = function(e) {");
                builder.append("  if (timerId !== 0) {");
                builder.append("    clearInterval(timerId);");
                builder.append("    timerId = 0;");
                builder.append("  }");
                builder.append("  if (e.data > 0) {");
                builder.append("    timerId = setInterval(function() {");
                builder.append("        postMessage(null);");
                builder.append("    }, e.data);");
                builder.append("  }");
                builder.append("};");
                return URL.createObjectURL(builder.getBlob());
            }
            return null;
        }());

        var initialize = function() {
            if (TIMER_PATH) {
                this._timer = new Worker(TIMER_PATH);
                this.isMuteki = true;
            } else {
                this._timer = null;
                this.isMuteki = false;
            }

            this._timerId = 0;
        };

        $this.setInterval = function(func, interval) {
            if (this._timer !== null) {
                this._timer.onmessage = func;
                this._timer.postMessage(interval);
            } else {
                if (this._timerId !== 0) {
                    clearInterval(this._timerId);
                }
                this._timerId = setInterval(func, interval);
            }
        };

        $this.clearInterval = function() {
            if (this._timer !== null) {
                this._timer.postMessage(0);
            } else if (this._timerId !== 0) {
                clearInterval(this._timerId);
                this._timerId = 0;
            }
        };

        return MutekiTimer;
    }());