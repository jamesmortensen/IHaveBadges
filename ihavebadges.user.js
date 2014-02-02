// ==UserScript==
// @name           IHaveBadges 
// @namespace      http://stackapps.com/q/3759/4812 
// @author         jmort253 (http://stackoverflow.com/users/552792)
// @description    Link the badges in the toolbar to the badge section 
// @homepage       http://stackapps.com/q/3759/4812
// @copyright      2012-2014 James Mortensen (http://stackoverflow.com/users/552792/jmort253) 
// @license        BSD License
// @version        1.3
// @include        http://*.stackoverflow.com/*
// @include        http://stackoverflow.com/*
// @include        http://*.serverfault.com/*
// @include        http://serverfault.com/*
// @include        http://*.superuser.com/*
// @include        http://superuser.com/*
// @include        http://*.stackexchange.com/*
// @include        http://stackapps.com/*
// @include        http://*.askubuntu.com/*
// @include        http://askubuntu.com/*
// @history        1.0 initial release to the public
// @history        1.1 who forgets to include stackoverflow? Me! That's who!
// @history        1.2 added in answers.onstartups
// @history        1.3 modified the script to work with the new top navigation bar in February, 2014 and removed answers.onstartups.
// ==/UserScript==

function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};

with_jquery(function($) {

    var topbarlinks = $('.topbar-links .profile-me').clone();
    $('.topbar-links:first').prepend(topbarlinks);
    
    $('.topbar-links a.profile-me').eq(1).find('.avatar-me').css('visibility','hidden');
    $('.topbar-links a.profile-me').eq(1).css('padding-left','0px').css('margin-right','0px'); 
    $('.topbar-links a.profile-me').eq(1).find('div:first').css('width','0px');
    $('.topbar-links a.profile-me').eq(1).find('.reputation').remove()
    $('.topbar-links a.profile-me').eq(0).find('.topbar-flair [title*="badge"]').remove();
    $('.topbar-links a.profile-me').eq(0).find('.topbar-flair [title*="badges"]').remove();
    $('.topbar-links a.profile-me').eq(1).attr('href', $('.topbar-links a.profile-me').eq(1).attr('href') + '?tab=badges');
 
});
