

/****************************************************************************
 * SmoothFox                                                                *
 * priority: general improvements in firefox                                         *
 * version: 24 September 2020                                               *
 * url: https://github.com/hjstephens09/Better-Fox                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: SMOOTH SCROLLING (OVERALL IMPROVEMENT OF DEFAULTS)              *
****************************************************************************/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
user_pref("mousewheel.min_line_scroll_amount", 40);

/*******************************************************************************
 * SECTION: GENERAL IMPROVEMENTS
 ******************************************************************************/

// PREF: Lazy Image Loading
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true); /*default*/

// PREF: Reduce animation time for fullscreen animations for HTML5 content
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

// PREF: Decrease delay of security dialog when downloading extensions
// default=1000
user_pref("security.dialog_enable_delay", 0);

// PREF: Increase communication channels
// Increased browser speed shall be mainly observed in pages that contain
// images and videos, which normally slow down loading times. The range of
// value for this setting goes from 1 to 65535. However, it is rather
// unreasonable to increase it to the maximum allowed value, and
// subsequently strain the system.
// Users on slower connections may want to reduce this number to help prevent
// HTTP connection timeouts. Users on faster connections may want to increase it,
// but the default value is usually fine for normal usage.
// https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-persistent-connections-per-server
user_pref("network.http.max-connections", 1000); // default=900

// PREF: Increase memory capacity in order to load more pages faster
// If you enter a high value, but you don’t have a lot of RAM in your
// computer (e.g. 2GB), then you’ll just decrease the overall system speed.
// So pick wisely, and test the browser (and overall system) performance
// before leaving this value changed permanently.
// https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
// default=250 -> 250KB; 1000 -> 1MB; 12000 -> 12MB; 51200 -> 50MB
user_pref("browser.cache.disk.metadata_memory_limit", 2000);

// PREF: Paint visuals on the webpage as fast as possible
// The number of milliseconds to wait before first displaying the page.
// Lower values will make a page initially display more quickly, but they will
// make the page take longer to finish rendering. Higher values will have the
// opposite effect (i.e. page initially displays slower, but less time is spent
// watching it render).
// http://kb.mozillazine.org/Nglayout.initialpaint.delay
// https://botw.org/articles/firefox-about-config.htm
user_pref("nglayout.initialpaint.delay", 125); // default=250

// PREF: Prevent FF from going offline
// Firefox manages network connectivity poorly. It'll stall your browsing if
// your connectivity goes out, even for a second. It can make you think your
// wifi is down, etc. Best to disable unless you need it.
// https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560
user_pref("network.manage-offline-status", false);

// PREF: Disable Firefox animations 
// Use for old, slow hardware if Firefox gives you laggy performance.
user_pref("toolkit.cosmeticAnimations.enabled", true);

// PREF: Reduce memory usage when Firefox is minimized [WINDOWS-only]
user_pref("config.trim_on_minimize", true);

/***********************************************
 * Quality of Life fixes
 **********************************************/

// PREF: Allow Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: Set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
user_pref("browser.startup.page", 3);


// PREF: Disable Activity Stream Top Stories, Pocket-based and/or sponsored content
user_pref("browser.newtabpage.activity-stream.pocketCta", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);

// PREF: Disable Activity Stream snippets
// Runs code received from a server (aka Remote Code Execution) and sends information back to a metrics server
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// PREF: Disable Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");

// PREF: Disable Activity Stream feeds
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);  
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);  
user_pref("browser.newtabpage.activity-stream.feeds.messagecenterfeed", false);  
user_pref("browser.newtabpage.activity-stream.feeds.migration", false);  
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);  
user_pref("browser.newtabpage.activity-stream.feeds.places", false);  
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);  
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);  
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);  
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);  
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);  
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);  
user_pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", false);  

// PREF: Disable Activity Stream (others)
user_pref("browser.newtabpage.activity-stream.messageCenterExperimentEnabled", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.rec.impressions", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc.impressions", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "");  
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);  
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);  
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false); 

// PREF: Disable new tab tile ads and preload
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
user_pref("browser.newtab.preload", false);  
user_pref("browser.newtabpage.directory.ping", "");  
user_pref("browser.newtabpage.activity-stream.asrouter.messageProviders", ""); 

// PREF: Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
user_pref("browser.startup.homepage_override.mstone", "ignore");

// PREF: Disable separate about:welcome page
// https://bugzilla.mozilla.org/show_bug.cgi?id=1617783
user_pref("browser.aboutwelcome.enabled", false);
user_pref("trailhead.firstrun.branches", "");
user_pref("browser.aboutwelcome.overrideContent", "");

/******************************************************************************
 * SECTION: DISABLE POCKET EXTENSION                                          *
******************************************************************************/

// PREF: Disable built-in Pocket extension
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.api"," ");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: Choose download location
// SETTING: To set your default "downloads": General>Downloads>Save files to
// 0=desktop, 1=downloads (default), 2=last used
user_pref("browser.download.folderList", 1);

// PREF: Enforce user interaction for security by always asking where to download
// On Android this blocks longtapping and saving images
// SETTING: General>Downloads>Always ask you where to save files
user_pref("browser.download.useDownloadDir", false);

// PREF: Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

// PREF: Disable hiding mime types (Options>General>Applications) not associated with a plugin
// default=true
user_pref("browser.download.hide_plugins_without_extensions", false);

// PREF: Autohide download button
user_pref("browser.download.autohideButton", true);

/****************************************************************************
 * SECTION: WARNINGS                                                        *
****************************************************************************/

// PREF: Disable Warnings
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0); // -1=also works
user_pref("full-screen-api.warning.timeout", 0); // -1=also works
user_pref("browser.aboutConfig.showWarning", false);

/****************************************************************************
 * SECTION: ANNOYANCES                                                      *
****************************************************************************/

// PREF: Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: Hide parts of the url in the location bar
user_pref("browser.urlbar.trimURLs", true);

// PREF: Disable annoying website notifications
user_pref("permissions.default.desktop-notification", 2);

// PREF: Adjust HTML5 autoplay settings
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
user_pref("media.autoplay.default", 0);

// PREF: Disable Reader mode
// Firefox will not have to parse webpage for Reader when navigating.
// Minimal performance impact.
user_pref("reader.parse-on-load.enabled", false);

// PREF: Disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.backspace_action", 2);

// PREF: Disable ALT key toggling the menu bar
user_pref("ui.key.menuAccessKey", 0);

// PREF: Disable website control over browser right-click context menu
// [!] This sometimes results in having two menus displayed.
// [NOTE] Shift-Right-Click will always bring up the browser right-click
// context menu.
user_pref("dom.event.contextmenu.enabled", false);

// PREF: CTRL+TAB cycles tabs in chronological order instead of recently-
// used order
user_pref("browser.ctrlTab.recentlyUsedOrder", false);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
user_pref("layout.spellcheckDefault", 2);

// PREF: Disable Accessibility services
user_pref("accessibility.force_disabled", 1);

// PREF: Limit the number of bookmark backups Firefox keeps
user_pref("browser.bookmarks.max_backups", 4);

// PREF: Allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level
user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: Hide image placeholders
user_pref("browser.display.show_image_placeholders", false);

// PREF: Disable links launching Windows Store on Windows 8/8.1/10
// [WINDOWS-only]
// [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/
user_pref("network.protocol-handler.external.ms-windows-store", false);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: Control how non-pinned tabs are loaded when a session is restored.
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
user_pref("browser.sessionstore.restore_on_demand", true);

// PREF: Control behavior of links that would normally open in a new window.
// 1=Open in the current tab/window
// 2=Open in a new window
// 3=Open in a new tab in the current window (default)
user_pref("browser.link.open_newwindow", 3);

// PREF: Open links targeting new windows in a new tab instead
// Pop-up windows are treated like regular tabs
// You can still right-click a link and open in a new window
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// PREF: Leave the browser window open even after you close the last tab
user_pref("browser.tabs.closeWindowWithLastTab", true);

// PREF: Load bookmarks in the background using Bookmarks Menu
user_pref("browser.tabs.loadBookmarksInBackground", false);
user_pref("browser.tabs.loadBookmarksInTabs", false);

// PREF: Color management
// Force FF to show the same color profiles as Chromium
user_pref("gfx.color_management.mode", 1);
user_pref("gfx.color_management.enablev4", true);

// [FF 77+] PREF: Firefox now allows viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment. 
user_pref("browser.helperApps.showOpenOptionForPdfJS", true);

// [FF 77+] PREF: Prevent password truncation when submitting form data
// https://www.ghacks.net/2020/05/18/firefox-77-wont-truncate-text-exceeding-max-length-to-address-password-pasting-issues/
user_pref("editor.truncate_user_pastes", false);

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: Enhanced Tracking Protection in Private Browsing mode 
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// PREF: Enhanced Tracking Protection for regular windows
// ALTERNATIVE: Allow an extension like uBlock Origin or Ghostery to protect you
// against tracking in regular windows and social tracking instead. Firefox's Tracking
// Protection does not make exceptions to allow certain content (i.e. Twitter's
// embedded tweets on articles).
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// PREF: Regardless, Firefox will continue to block cryptominers, fingerprinters, etc.
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

/******************************************************************************
 * SECTION: STORAGE                              *
******************************************************************************/

// PREF: Third-party cookies and site isolation
// If you're uncomfortable with Mozilla's tracker isolation policies, alter this value to 1.
// 1=disable third-party cookies (may cause site breakage)
// 3=blocks from unvisited websites
// 4=block cross site and social media trackers (default)
// 5=block cross site and social media trackers, and isolate remaining cookies
user_pref("network.cookie.cookieBehavior", 5);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);

// PREF: Limit third-party cookies to the current session even when they are allowed
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

/********************************************************************************'
 * PReFRETCH
 ********************************************************************************/

 // PREF: Disable "Hyperlink Auditing" (click tracking).
user_pref("browser.send_pings", false);
// Enforce same host in case.
user_pref("browser.send_pings.require_same_host", true);

// PREF: DNS PREFETCHING
// In order to reduce latency, Firefox will proactively perform domain name resolution
// on links that the user may choose to follow as well as URLs for items referenced by elements in a web page.
// NOTE: You can set uBlock Origin to do disable preloading in its settings.
// https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
user_pref("network.dns.disablePrefetch", false); /* default */
// As a security measure, prefetching of embedded link hostnames is not done from documents loaded over HTTPS.
user_pref("network.dns.disablePrefetchFromHTTPS", true); /* default */

// PREF: Preload the autocomplete URL in the address bar.
// Firefox preloads URLs that autocomplete when a user types into the address bar, which is
// a concern if URLs are suggested that the user does not want to connect to.
// NOTE: Firefox will do the server DNS lookup and TCP and TLS handshake but not start sending or receiving HTTP data.
// https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/
user_pref("browser.urlbar.speculativeConnect.enabled", true); /* default */

// PREF: Network predictor
user_pref("network.predictor.enabled", true); /* default */
user_pref("network.predictor.enable-prefetch", false); /* default */

/******************************************************************************
 * SECTION: SEARCH / URL BAR                              *
******************************************************************************/

// PREF: Disable live search engine suggestions (Google, Bing, etc.)
// [!] Search engines keylog every character you type from the URL bar
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);

// PREF: Turn off all URL bar suggestions (bookmarks, history, open tabs)
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);

// PREF: Disable location bar domain guessing.
// Domain guessing intercepts DNS "hostname not found errors" and resends a
// request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
// via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
// as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
// intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
// and is a security risk (e.g. common typos & malicious sites set up to exploit this).
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.typo.scheme", false);

// PREF: "Not Secure" text on HTTP sites.
user_pref("security.insecure_connection_text.enabled", true);

/******************************************************************************
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/

// PREF: Enable DNS-over-HTTPS
// https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
// https://www.internetsociety.org/blog/2018/12/dns-privacy-support-in-mozilla-firefox/
// 0=off, 2=TRR preferred, 3=TRR only, 5=TRR disabled
// user_pref("network.trr.mode", 3);

// PREF: Enable ESNI
// This prevents others from intercepting the TLS SNI extension and using it
// to determine what websites you are browsing.
// [1] https://www.eff.org/deeplinks/2018/09/esni-privacy-protecting-upgrade-https/
// user_pref("network.security.esni.enabled", true);

// PREF: Force FF to always use your custom DNS resolver
// You will type between the "" for both prefs.
// I recommend creating your own URI with NextDNS for both privacy and security
// [1] https://nextdns.io
// user_pref("network.trr.uri", "192.168.1.99");
// user_pref("network.trr.custom_uri", "192.168.1.99");

// PREF: Disable DOM timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
user_pref("dom.enable_performance",	false);

// PREF: Disable Location-Aware Browsing (geolocation)
// https://www.mozilla.org/en-US/firefox/geolocation/
user_pref("geo.enabled", false);

// PREF: Disable leaking network/browser connection information via Javascript
// Network Information API provides general information about the system's connection type (WiFi, cellular, etc.)
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
// https://wicg.github.io/netinfo/#privacy-considerations
// https://bugzilla.mozilla.org/show_bug.cgi?id=960426
user_pref("dom.netinfo.enabled", false);

// PREF: Disable WebRTC entirely to prevent leaking internal IP addresses (Firefox < 42)
// NOTICE: Disabling WebRTC breaks peer-to-peer file sharing tools (reep.io ...)
user_pref("media.peerconnection.enabled", false);

// PREF: Don't reveal your internal IP when WebRTC is enabled (Firefox >= 42)
// https://wiki.mozilla.org/Media/WebRTC/Privacy
// https://github.com/beefproject/beef/wiki/Module%3A-Get-Internal-IP-WebRTC
user_pref("media.peerconnection.ice.default_address_only", true); // Firefox 42-51
user_pref("media.peerconnection.ice.no_host", true); // Firefox >= 52

// PREF: Disable WebRTC getUserMedia, screen sharing, audio capture, video capture
// https://wiki.mozilla.org/Media/getUserMedia
// https://blog.mozilla.org/futurereleases/2013/01/12/capture-local-camera-and-microphone-streams-with-getusermedia-now-enabled-in-firefox/
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

// PREF: Disable battery API (Firefox < 52)
// https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
// https://bugzilla.mozilla.org/show_bug.cgi?id=1313580
user_pref("dom.battery.enabled", false);

// PREF: Disable telephony API
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.telephony.enabled", false);

// PREF: Disable "beacon" asynchronous HTTP transfers (used for analytics)
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("beacon.enabled",	false);

// PREF: Disable speech recognition
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// https://wiki.mozilla.org/HTML5_Speech_API
user_pref("media.webspeech.recognition.enable",	false);

// PREF: Disable speech synthesis
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
user_pref("media.webspeech.synth.enabled", false);

// PREF: Disable sensor API
// https://wiki.mozilla.org/Sensor_API
user_pref("device.sensors.enabled",	false);

// PREF: Disable pinging URIs specified in HTML <a> ping= attributes
// http://kb.mozillazine.org/Browser.send_pings
user_pref("browser.send_pings",	false);

// PREF: Disable gamepad API to prevent USB device enumeration
// https://www.w3.org/TR/gamepad/
// https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled", false);

// PREF: Disable virtual reality devices APIs
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
// https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
user_pref("dom.vr.enabled",	false);

// PREF: Disable vibrator API
user_pref("dom.vibrator.enabled", false);

// PREF: Disable face detection
user_pref("camera.control.face_detection.enabled", false);

// PREF: Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.countryCode",	"US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");

// PREF: Set Accept-Language HTTP header to en-US regardless of Firefox localization
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
user_pref("intl.accept_languages", "en-US, en");

// PREF: Don't use OS values to determine locale, force using Firefox locale setting
// http://kb.mozillazine.org/Intl.locale.matchOS
user_pref("intl.locale.matchOS", false);

// PREF: Disable video stats to reduce fingerprinting threat
// https://bugzilla.mozilla.org/show_bug.cgi?id=654550
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-100468785
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-148922065
user_pref("media.video_stats.enabled",				false);

// PREF: Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
user_pref("general.buildID.override", "20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// PREF: Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled",	false);

// PREF: Disable Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
user_pref("plugin.state.flash",	0);

// PREF: Disable Java NPAPI plugin
user_pref("plugin.state.java", 0);

// PREF: Disable sending Flash Player crash reports
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled",	false);

// PREF: When Flash crash reports are enabled, don't send the visited URL in the crash report
user_pref("dom.ipc.plugins.reportCrashURL",	false);

// PREF: When Flash is enabled, download and use Mozilla SWF URIs blocklist
// https://bugzilla.mozilla.org/show_bug.cgi?id=1237198
// https://github.com/mozilla-services/shavar-plugin-blocklist
user_pref("browser.safebrowsing.blockedURIs.enabled", true);

// PREF: Disable Shumway (Mozilla Flash renderer)
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Shumway
user_pref("shumway.disabled", true);

// PREF: Disable Gnome Shell Integration NPAPI plugin
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);

// PREF: Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
user_pref("devtools.debugger.remote-enabled",			false);
user_pref("devtools.chrome.enabled",				false);
user_pref("devtools.debugger.force-local",			true);

// PREF: Disable Mozilla telemetry/experiments
// https://wiki.mozilla.org/Platform/Features/Telemetry
// https://wiki.mozilla.org/Privacy/Reviews/Telemetry
// https://wiki.mozilla.org/Telemetry
// https://www.mozilla.org/en-US/legal/privacy/firefox.html#telemetry
// https://support.mozilla.org/t5/Firefox-crashes/Mozilla-Crash-Reporter/ta-p/1715
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
// https://gecko.readthedocs.io/en/latest/browser/experiments/experiments/manifest.html
// https://wiki.mozilla.org/Telemetry/Experiments
// https://support.mozilla.org/en-US/questions/1197144
// https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html#id1
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");

// PREF: Disallow Necko to do A/B testing
// https://trac.torproject.org/projects/tor/ticket/13170
user_pref("network.allow-experiments", false);

// PREF: Disable sending Firefox crash reports to Mozilla servers
// https://wiki.mozilla.org/Breakpad
// http://kb.mozillazine.org/Breakpad
// https://dxr.mozilla.org/mozilla-central/source/toolkit/crashreporter
// https://bugzilla.mozilla.org/show_bug.cgi?id=411490
// A list of submitted crash reports can be found at about:crashes
user_pref("breakpad.reportURL",	"");

// PREF: Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
user_pref("browser.tabs.crashReporting.sendReport",		false);
user_pref("browser.crashReports.unsubmittedCheck.enabled",	false);

// PREF: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
user_pref("dom.flyweb.enabled",	false);

// PREF: Disable the UITour backend
// https://trac.torproject.org/projects/tor/ticket/19047#comment:3
user_pref("browser.uitour.enabled",	false);