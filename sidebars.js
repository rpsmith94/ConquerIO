module.exports = {
  someSidebar: {
    'Overview': [
      'welcome',
      'golive',
      'custom-404'
    ],
    'Integrations': [
      'integrations/overview',
      {
        type: 'category',
        label: 'Drupal',
        items: [
          'integrations/drupal',
          'integrations/drupal/seed',
          'integrations/drupal/purger',
          'integrations/drupal/drupal-cron',
          'integrations/drupal/drupal-search'
        ],
      },
      'integrations/wordpress',
    ],
    'Dashboard': [
      'dashboard/get-started',
      'dashboard/content',
      'dashboard/domains',
      'dashboard/authentication',
      'dashboard/page-rules',
      'dashboard/page-rules-proxy',
      'dashboard/page-rules-waf',
      'dashboard/crawler',
      'dashboard/alerts',
      'dashboard/custom-http-headers',
      'dashboard/search',
      'dashboard/forms',
      'dashboard/team',
      'dashboard/s3-sync',
    ],
    'CLI': [
      'cli/get-started',
      'cli/crawler',
      'cli/continuous-integration'
    ],
    'API': [
      'api/get-started-content',
      'api/get-started-projects',
      'api/search',
      'api/client-workflow'
    ],
    "Security": [
      {
        type: "category",
        label: "WAF",
        items: [
          "security/waf/get-started",
          "security/waf/management",
          {
            type: "category",
            label: "Ruleset",
            items: [
              'security/waf/crs/910',
              'security/waf/crs/920',
              'security/waf/crs/930',
              'security/waf/crs/931',
              'security/waf/crs/932',
            ],
          },
        ],
      }
    ],
  },
};
