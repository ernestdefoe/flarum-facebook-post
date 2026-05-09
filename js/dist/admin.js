'use strict';

(function () {
  // ── Module: ernestdefoe/flarum-facebook-post (admin) ──────────────────────
  // Compiled from js/src/admin.js
  // Compatible with Flarum 2.x admin frontend

  var app = flarum.core.compat['admin/app'];

  app.initializers.add('ernestdefoe-facebook-post', function () {
    app.extensionData
      .for('ernestdefoe-facebook-post')

      // ── Enable/Disable toggle ──────────────────────────────────────────────
      .registerSetting({
        setting: 'ernestdefoe-facebook-post.enabled',
        label: app.translator.trans(
          'ernestdefoe-facebook-post.admin.settings.enabled_label'
        ),
        help: app.translator.trans(
          'ernestdefoe-facebook-post.admin.settings.enabled_help'
        ),
        type: 'boolean',
      })

      // ── Facebook Page ID ───────────────────────────────────────────────────
      .registerSetting({
        setting: 'ernestdefoe-facebook-post.page_id',
        label: app.translator.trans(
          'ernestdefoe-facebook-post.admin.settings.page_id_label'
        ),
        help: app.translator.trans(
          'ernestdefoe-facebook-post.admin.settings.page_id_help'
        ),
        type: 'text',
        placeholder: '123456789012345',
      })

      // ── Page Access Token ──────────────────────────────────────────────────
      .registerSetting({
        setting: 'ernestdefoe-facebook-post.page_access_token',
        label: app.translator.trans(
          'ernestdefoe-facebook-post.admin.settings.token_label'
        ),
        help: app.translator.trans(
          'ernestdefoe-facebook-post.admin.settings.token_help'
        ),
        type: 'password',
        placeholder: 'EAAxxxxxxxx\u2026',
      })

      // ── Permission ─────────────────────────────────────────────────────────
      .registerPermission(
        {
          icon: 'fab fa-facebook',
          label: app.translator.trans(
            'ernestdefoe-facebook-post.admin.permissions.manage_label'
          ),
          permission: 'ernestdefoe-facebook-post.manage',
        },
        'moderate'
      );
  });
})();
