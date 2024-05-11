/**
 * Remove "msLaunch=true" parameter, and add "suppressPrompt=true"
 *
 * This runs at document start so we can execute as quickly as possible, mostly to preempt Teams's
 * annoying JS that tries to open the link in the desktop app, but also for a fast UX.
 */
if (window.location.href.indexOf('&msLaunch=true') !=-1){
    window.location.href = window.location.href.replace('&msLaunch=true', '&suppressPrompt=true');
}

