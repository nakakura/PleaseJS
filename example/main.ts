/// <reference path="../../../PleaseJS/example/typings/Please.d.ts" />

module Sample{
    export class Sample{
        constructor(){
            console.log("make_color");
            console.log(Please.make_color());

            console.log("make_color with options");
            console.log(Please.make_color({
                golden: false,
                base_color: 'red',
                colors_returned: 100,
                format: 'rgb-string'
            }));

            console.log("make_scheme");
            console.log(Please.make_scheme({
                h: 145,
                s: .7,
                v: .6
            }));

            console.log("make_scheme with options");
            console.log(Please.make_scheme(
                {
                    h: 145,
                    s: .7,
                    v: .6
                },
                {
                    scheme_type: 'complement',
                    format: 'hex'
                }
            ));

            console.log("NAME_to_HEX");
            console.log(Please.NAME_to_HEX("red"));

            console.log("NAME_to_HSV");
            console.log(Please.NAME_to_HSV("red"));

            console.log("NAME_to_RGB");
            console.log(Please.NAME_to_RGB("red"));

            console.log("HEX_to_HSV");
            console.log(Please.HEX_to_HSV("#ff0000"));

            console.log("RGB_to_HEX");
            console.log(Please.RGB_to_HEX({
                r: 0,
                g: 0,
                b: 0
            }));

            console.log("HSV_to_RGB");
            console.log(Please.HSV_to_RGB({
                h: 145,
                s: .7,
                v: .6
            }));

            console.log("RGB_to_HSV");
            console.log(Please.RGB_to_HSV({
                r: 0,
                g: 0,
                b: 0
            }));

            console.log("HSV_to_HEX");
            console.log(Please.HSV_to_HEX({
                h: 145,
                s: .7,
                v: .6
            }));

            console.log("HEX_to_HSV");
            console.log(Please.HEX_to_HSV("#ff0000"));
        }
    }
}

