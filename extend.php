<?php

use Flarum\Extend;
use Ernestdefoe\FacebookPost\Listener\PostDiscussionToFacebook;
use Flarum\Post\Event\Posted;

return [
    (new Extend\Event())
        ->listen(Posted::class, PostDiscussionToFacebook::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    (new Extend\Settings())
        ->serializeToForum('ernestdefoe-facebook-post.page_id', 'ernestdefoe-facebook-post.page_id')
        ->serializeToForum('ernestdefoe-facebook-post.enabled', 'ernestdefoe-facebook-post.enabled'),
];
