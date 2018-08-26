(function (window) {
    var svgSprite = '<svg><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M762.02856494 897.75062598c14.73047842 14.68099599 14.73047842 38.52434355 0 53.20713779-14.65670391 14.72328018-38.50454971 14.72328018-53.16575273 0L261.10504268 540.68520606c-7.82272705-7.86681123-11.17493877-18.27162246-10.66481895-28.52258906-0.51011895-10.25726396 2.84119277-20.68276816 10.66481895-28.52798643l447.75866953-410.27255859c14.66120303-14.72328018 38.50904883-14.72328018 53.16575273 0 14.73047842 14.69628984 14.73047842 38.52434355 0 53.20713779L341.33230127 512.16171787 762.02856494 897.75062598 762.02856494 897.75062598zM762.02856494 897.75062598"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M209.7125 500.31125l286.38 286.38c2.10375 2.10375 4.55625 3.67875 7.155 4.77 0.01125 0 0.01125 0.01125 0.0225 0.01125 1.1025 0.46125 2.23875 0.77625 3.38625 1.0575 0.30375 0.07875 0.585 0.2025 0.9 0.27 2.93625 0.585 5.9625 0.585 8.8875 0 0.315-0.0675 0.59625-0.19125 0.9-0.27 1.1475-0.28125 2.28375-0.59625 3.38625-1.0575 0.01125-0.01125 0.0225-0.01125 0.045-0.0225 2.59875-1.09125 5.02875-2.66625 7.1325-4.77L814.2875 500.31125c8.7525-8.7525 8.7525-23.07375 0-31.815-8.7525-8.7525-23.07375-8.7525-31.815 0L534.5 716.46875 534.5 140.76125c0-12.375-10.125-22.5-22.5-22.5-12.375 0-22.5 10.125-22.5 22.5l0 575.7075L241.5275 468.49625c-8.7525-8.7525-23.07375-8.7525-31.815 0C200.96 477.24875 200.96 491.55875 209.7125 500.31125z"  ></path><path d="M917 703.25l0 112.5c0 24.85125-20.14875 45-45 45L152 860.75c-24.85125 0-45-20.14875-45-45L107 703.25c0-12.43125-10.06875-22.5-22.5-22.5l0 0c-12.43125 0-22.5 10.06875-22.5 22.5l0 112.5c0 49.5 40.5 90 90 90l720 0c49.5 0 90-40.5 90-90L962 703.25c0-12.43125-10.06875-22.5-22.5-22.5l0 0C927.06875 680.75 917 690.81875 917 703.25z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M958.009 307.2c0-9.317-3.554-18.636-10.663-25.746-14.219-14.218-37.273-14.218-51.491 0l-383.854 383.856-383.854-383.856c-14.219-14.218-37.271-14.218-51.49 0-14.219 14.22-14.219 37.271 0 51.491l409.6 409.6c14.219 14.218 37.271 14.218 51.49 0l409.6-409.6c7.109-7.11 10.663-16.429 10.663-25.746z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M521.39990234 63.76132813c-23.13984375 0.13623047-41.66806641 18.87539062-41.90273437 42.82822265-0.22587891 23.27783203-0.04833984 46.55917969-0.04394531 69.83876953 0.00351562 23.95546875-0.32167969 47.91621094 0.09667968 71.86289063 0.41660156 23.79023437 19.35351563 41.43339844 43.37226563 41.22597656 23.04316406-0.19863281 41.81835938-18.46582031 41.94140625-41.70234375 0.25488281-47.23505859 0.27421875-94.47099609-0.02021485-141.70341797-0.15205078-24.328125-19.22167969-42.49160156-43.44433593-42.35009765M349.22041016 141.16923828c-7.31689453-12.48046875-19.02480469-18.68642578-33.665625-18.759375-30.88740234 0.00966797-49.72851563 32.48789063-34.26591797 59.92294922 22.82255859 40.49472656 46.04765625 80.76445313 69.42216797 120.94541016 11.38886719 19.57851562 35.19755859 25.77480469 54.33222656 14.83945312 18.73212891-10.70683594 26.08417969-34.24394531 15.28330078-53.48144531-23.25146484-41.41142578-47.08476563-82.49765625-71.10615234-123.46699219M148.20751953 347.30351562c38.95664062 22.66787109 78.03808594 45.11865234 117.0703125 67.65820313 5.90361328 3.40751953 12.02783203 6.06884766 19.06347656 5.63115234 17.69941406 0.13623047 31.61777344-10.49150391 36.31992188-27.72685547 4.38398437-16.06376953-2.36162109-32.29980469-17.79345703-41.30771484-39.21591797-22.89287109-78.53466797-45.60644531-117.86484375-68.30068359-19.80175781-11.42578125-42.02841797-6.17607422-52.58583985 12.21679687-10.72617188 18.68554688-4.36992188 40.09921875 15.79042969 51.82910156M178.23183594 554.69638672c23.20488281-0.01054687 46.41152344 0.18017578 69.61376953-0.06679688 20.56816406-0.21972656 34.41181641-14.42636719 34.09453125-34.39599609-0.30146484-18.98876953-14.86054688-32.84472656-34.78007813-32.86494141-45.40253906-0.04658203-90.80244141-0.05097656-136.20410156 0.03867188-21.24228516 0.0421875-35.7890625 14.03876953-35.65986328 34.00224609 0.12744141 19.47128906 14.57226563 33.17080078 35.33818359 33.27011719 22.53251953 0.10986328 45.06416016 0.02636719 67.5975586 0.01669922M311.56542969 642.77246094c-8.24150391-14.31298828-26.31269531-19.84042969-41.18554688-11.36953125-40.90341797 23.29541016-81.55195312 47.04960938-122.18291015 70.82226562-9.75761719 5.709375-14.33671875 14.81308594-14.47558594 22.28994141 0.04394531 26.85585937 23.92382813 42.15146484 44.28984375 30.83203125 41.43515625-23.02382813 82.36230469-46.98632813 123.16552734-71.128125 15.09345703-8.92880859 18.88769531-26.68447266 10.38867188-41.44746094M392.33691406 732.11503906c-12.54726562-3.56484375-24.29824219 1.27705078-31.53515625 13.77333985a21423.77490234 21423.77490234 0 0 0-67.91660156 118.18037109c-8.80136719 15.42392578-5.15917969 31.36201172 8.578125 39.57275391 14.090625 8.41992188 30.10166016 3.56835938 39.3046875-12.3038086 22.45869141-38.72460938 44.73720703-77.55556641 67.12294922-116.32324218 2.90742187-5.03613281 5.00361328-10.26914062 5.05283203-13.11855469 0.01582031-15.66035156-8.1421875-26.23974609-20.60683594-29.78085938M521.93164063 771.05234375c-14.41757813 0.07910156-24.02929688 10.46953125-24.12597657 26.51044922-0.13535156 22.27851563-0.03515625 44.55878906-0.03515625 66.8399414h-0.06152344c0 22.95351563-0.11777344 45.91054687 0.04042969 68.8640625 0.10898438 16.059375 9.71630859 26.43134766 24.12246094 26.55175782 14.8921875 0.12128906 24.66210938-10.39306641 24.70078125-27.02021485 0.10283203-44.89453125 0.11865234-89.79257813 0.06152344-134.68974609-0.01933594-16.51201172-9.86748047-27.13710937-24.70166016-27.05625M677.65976563 748.09882813c-6.57333984-11.27021484-19.2515625-14.08359375-29.69472657-7.80205079-10.07050781 6.05917969-13.67402344 18.12744141-7.48300781 29.0241211 23.09589844 40.65556641 46.50820313 81.12832031 69.96972656 121.57207031 3.96650391 6.83525391 10.24628906 10.51611328 18.39023438 10.39042969 16.31074219-0.12216797 26.82773438-16.98837891 18.65830078-31.5421875-22.88759766-40.76982422-46.28583984-81.25488281-69.84052734-121.64238282M888.54453125 711.8984375a70017.78339844 70017.78339844 0 0 0-119.47851563-69.11455078c-4.13613281-2.38710938-8.5640625-3.81445312-13.49999999-2.6015625-8.01826172 1.96787109-13.13349609 7.06113281-14.5125 15.02753906-1.65585938 9.55722656 3.37851562 16.00224609 11.32910156 20.5875 26.18261719 15.10136719 52.34677734 30.22998047 78.52148437 45.34277344 13.38046875 7.72558594 26.57460938 15.79921875 40.2038086 23.05546875 12.8953125 6.86513672 27.28125-1.78769531 27.2953125-15.85107422-0.06152344-7.41621094-3.59912109-12.81796875-9.85869141-16.44697266M931.49404297 505.67802734c-21.85839844-0.08085937-43.71591797-0.02197266-65.57519531-0.02197265v-0.04658203c-22.19414062 0-44.39003906-0.06328125-66.58330079 0.02636718-11.82128906 0.04394531-18.42539062 5.56611328-18.60117187 15.19365235-0.17753906 9.78486328 6.21386719 15.39931641 18.15820312 15.42568359 44.38916016 0.09931641 88.77832031 0.11777344 133.16835938 0.06503906 11.7421875-0.01230469 18.60820312-5.69003906 18.79453125-15.05830078 0.18808594-9.53349609-7.13056641-15.53730469-19.36142578-15.58300781M766.30273438 393.91455078a65253.36621094 65253.36621094 0 0 0 118.79736328-68.74804687c4.27412109-2.48115234 7.2421875-6.02490234 7.13847656-11.37744141-0.10898438-9.69697266-9.8296875-15.31054688-18.87890625-10.13115234C833.35625 326.55078125 793.50488281 349.70292969 753.69921875 372.9359375c-6.73242188 3.92871094-9.24433594 10.125-4.89726563 17.18876953 4.24951172 6.90380859 10.62246094 7.76074219 17.50078125 3.78984375M658.81865234 292.74980469c4.55537109-0.21708984 7.19560547-2.99794922 9.31113282-6.72539063 4.31982422-7.61132813 8.81103516-15.12333984 13.17832031-22.70830078 17.97363281-31.21787109 35.96572266-62.42255859 53.86113281-93.684375 4.46835938-7.8046875 2.65869141-14.64521484-4.18886719-16.28701172-6.74472656-1.6171875-9.58623047 3.24316406-12.35126953 8.05078125-20.14804688 35.01386719-40.31542969 70.01982422-60.45732422 105.03984375-2.5171875 4.37695313-5.29101563 8.65898437-7.29052734 13.27148438-2.74746094 6.32548828 1.46777344 12.87421875 7.93740234 13.04296875"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M793.314 370.062H599.36l26.608-222.143c0.109-0.898 0.168-1.804 0.18-2.705 0.214-15.183-6.782-30.412-20.225-44.044-20.459-20.749-54.819-36.393-79.925-36.393-25.555 0-48.909 12.931-62.477 34.594L303.013 355.76c-5.603 8.955-15.259 14.302-25.828 14.302h-47.932c-85.256 0-154.616 69.36-154.616 154.616v280.929c0 85.252 69.36 154.616 154.616 154.616h529.701c81.087 0 141.681-59.306 154.427-151.487l34.359-280.929c0.126-1.04 0.189-2.085 0.189-3.129 0.001-85.256-69.359-154.616-154.615-154.616zM126.176 805.607V524.678c0-56.836 46.241-103.077 103.077-103.077h21.81v487.084h-21.81c-56.836-0.001-103.077-46.238-103.077-103.078z m736.099-3.531c-7.126 51.539-38.012 106.609-103.321 106.609H302.602v-491.24c18.021-5.844 33.685-17.702 44.098-34.339l160.505-256.385c4.081-6.514 11.106-10.406 18.794-10.406 16.559 0 45.855 18.492 48.519 27.787l-29.783 248.663A25.766 25.766 0 0 0 570.32 421.6h222.994c56.341 0 102.268 45.436 103.065 101.593l-34.104 278.883z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M512 704c-105.6 0-192-86.4-192-192s86.4-192 192-192 192 86.4 192 192-86.4 192-192 192z m0-320c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z m75.2 576H438.4c-46.4 0-84.8-38.4-84.8-84.8 0-8-4.8-16-12.8-19.2-12.8-6.4-25.6-14.4-38.4-22.4-8-4.8-16-4.8-22.4-1.6-41.6 24-92.8 9.6-116.8-32L86.4 672c-11.2-19.2-14.4-43.2-8-65.6 6.4-22.4 20.8-40 40-51.2 6.4-4.8 11.2-12.8 11.2-20.8v-44.8c0-8-3.2-16-11.2-20.8-41.6-24-54.4-75.2-32-116.8l75.2-129.6c24-41.6 75.2-54.4 116.8-32 6.4 3.2 16 3.2 22.4-1.6 12.8-8 25.6-16 38.4-22.4 8-3.2 12.8-11.2 12.8-19.2 0-44.8 38.4-83.2 84.8-83.2h148.8c48 0 86.4 38.4 86.4 84.8 0 8 4.8 16 12.8 19.2 12.8 6.4 25.6 14.4 38.4 22.4 8 4.8 16 4.8 24 1.6 19.2-11.2 43.2-14.4 64-8 22.4 6.4 40 20.8 51.2 40l75.2 129.6c24 41.6 9.6 92.8-32 116.8-6.4 4.8-11.2 12.8-11.2 20.8V536c0 8 3.2 16 11.2 20.8 19.2 11.2 33.6 30.4 40 51.2s3.2 44.8-8 65.6L862.4 800c-24 40-75.2 54.4-116.8 32-6.4-4.8-16-3.2-24 1.6-12.8 8-25.6 16-38.4 22.4-8 3.2-12.8 11.2-12.8 19.2 1.6 46.4-36.8 84.8-83.2 84.8zM288 764.8c16 0 33.6 4.8 48 14.4 9.6 6.4 20.8 12.8 32 17.6 28.8 14.4 48 44.8 48 76.8 0 11.2 9.6 20.8 20.8 20.8h148.8c11.2 0 20.8-9.6 20.8-20.8 0-32 17.6-62.4 48-76.8 11.2-4.8 20.8-11.2 32-17.6 27.2-17.6 62.4-19.2 89.6-3.2 9.6 6.4 24 1.6 28.8-8L880 638.4c3.2-4.8 3.2-11.2 1.6-16-1.6-4.8-4.8-9.6-9.6-12.8-28.8-16-44.8-46.4-43.2-80v-35.2c-1.6-33.6 14.4-64 43.2-80 9.6-6.4 14.4-19.2 8-28.8L808 256c-3.2-4.8-8-8-12.8-9.6-4.8-1.6-11.2 0-16 1.6-28.8 16-62.4 14.4-89.6-3.2-9.6-6.4-20.8-12.8-32-17.6-28.8-14.4-48-44.8-48-76.8-1.6-12.8-11.2-22.4-22.4-22.4H438.4c-12.8 0-22.4 9.6-22.4 20.8 0 32-17.6 62.4-48 76.8-11.2 4.8-20.8 11.2-32 17.6-27.2 17.6-62.4 19.2-91.2 3.2-9.6-6.4-24-1.6-28.8 8L142.4 384c-6.4 9.6-1.6 24 8 28.8 28.8 16 44.8 46.4 43.2 80V528c1.6 33.6-14.4 64-43.2 80-4.8 3.2-8 8-9.6 12.8-1.6 4.8 0 11.2 1.6 16l75.2 129.6c6.4 9.6 19.2 14.4 28.8 8 12.8-6.4 27.2-9.6 41.6-9.6z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M378.39999969 970.4a30 30 0 0 1-21.19999969-51.19999969L766.4 512 357.2 101.6A30 30 0 1 1 399.60000031 58.80000031l430.39999969 430.39999969a30 30 0 0 1 0 42.40000031L399.60000031 961.59999969a30 30 0 0 1-21.20000062 8.80000031z"  ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document, done = false, init = function () {
                if (!done) {
                    done = true;
                    fn()
                }
            };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)