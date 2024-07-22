var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /**
     * This script contains embed functions for common plugins. This scripts are complety free to use for any purpose.
     */

    function writeFlash(p) {
        writeEmbed(
            'D27CDB6E-AE6D-11cf-96B8-444553540000',
            'https://web.archive.org/web/20190203150303/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0',
            'application/x-shockwave-flash',
            p
        );
    }

    function writeShockWave(p) {
        writeEmbed(
            '166B1BCA-3F9C-11CF-8075-444553540000',
            'https://web.archive.org/web/20190203150303/http://download.macromedia.com/pub/shockwave/cabs/director/sw.cab#version=8,5,1,0',
            'application/x-director',
            p
        );
    }

    function writeQuickTime(p) {
        writeEmbed(
            '02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',
            'https://web.archive.org/web/20190203150303/http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0',
            'video/quicktime',
            p
        );
    }

    function writeRealMedia(p) {
        writeEmbed(
            'CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA',
            'https://web.archive.org/web/20190203150303/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0',
            'audio/x-pn-realaudio-plugin',
            p
        );
    }

    function writeWindowsMedia(p) {
        p.url = p.src;
        writeEmbed(
            '6BF52A52-394A-11D3-B153-00C04F79FAA6',
            'https://web.archive.org/web/20190203150303/http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701',
            'application/x-mplayer2',
            p
        );
    }

    function writeEmbed(cls, cb, mt, p) {
        var h = '', n;

        h += '<object classid="clsid:' + cls + '" codebase="' + cb + '"';
        h += typeof(p.id) != "undefined" ? 'id="' + p.id + '"' : '';
        h += typeof(p.name) != "undefined" ? 'name="' + p.name + '"' : '';
        h += typeof(p.width) != "undefined" ? 'width="' + p.width + '"' : '';
        h += typeof(p.height) != "undefined" ? 'height="' + p.height + '"' : '';
        h += typeof(p.align) != "undefined" ? 'align="' + p.align + '"' : '';
        h += '>';

        for (n in p)
            h += '<param name="' + n + '" value="' + p[n] + '">';

        h += '<embed type="' + mt + '"';

        for (n in p)
            h += n + '="' + p[n] + '" ';

        h += '></embed></object>';

        document.write(h);
    }


}
/*
     FILE ARCHIVED ON 15:03:03 Feb 03, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:52:20 Jul 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.132
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.036
  esindex: 0.02
  cdx.remote: 5.644
  LoadShardBlock: 62.74 (3)
  PetaboxLoader3.datanode: 169.799 (5)
  PetaboxLoader3.resolve: 1159.464 (3)
  load_resource: 1271.015 (2)
*/
