// ==UserScript==
// @name           IHaveBadges 
// @namespace      http://stackapps.com/q/3759/4812 
// @author         jmort253 (http://stackoverflow.com/users/552792)
// @description    Link the badges in the toolbar to the badge section 
// @homepage       http://stackapps.com/q/3759/4812
// @version        1.1
// @include        http://*.stackoverflow.com/*
// @include        http://stackoverflow.com/*
// @include        http://*.serverfault.com/*
// @include        http://serverfault.com/*
// @include        http://*.superuser.com/*
// @include        http://superuser.com/*
// @include        http://*.stackexchange.com/*
// @include        http://mathoverflow.net/*
// @include        http://stackapps.com/*
// @history        1.0 initial release to the public
// @history        1.1 who forgets to include stackoverflow? Me! That's who!
// ==/UserScript==

function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};

with_jquery(function($) {
  
    var badge_anchor = $('<a id="badge_anchor" href="#"></a>'); 
    $('#hlinks-user > [title*="badge"]').each(function() {
        //console.info($(this).html());
        badge_anchor.append($(this));
    });
 
    var profileLinkArr = $('#hlinks-user > .profile-link').get(0).toString().split('/');

    badge_anchor.attr("href","/users/" + profileLinkArr[4] + "/" + profileLinkArr[5] + "?tab=badges");

//    var reputationElem = $('#hlinks-user > a[href*="reputation"]');
    var reputationElem;
    var reputation_score = $('#hlinks-user .reputation-score');
    if(reputation_score.parent().attr("href") != undefined && reputation_score.parent().attr("href").contains("reputation")) {
        reputationElem = reputation_score.parent();
    } else { 
        reputationElem = reputation_score;
    }

    reputationElem.after(badge_anchor);
 
});
