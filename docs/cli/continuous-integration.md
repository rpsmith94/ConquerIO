---
id: continuous-integration
title: Using Quant with CI
sidebar_label: CI pipelines
---

CI integration is a key area the CLI tool can assist with. When using a static generator your CI pipeline can be used to build and deploy content automatically as it changes.

For example, this documentation site is built with (Docusaurus)[https://v2.docusaurus.io/] and deployed to Quant via a (GitHub Actions)[https://github.com/marketplace/actions/deploy-to-quantcdn] CI pipeline. You can (view the code)[https://github.com/quantcdn/docs/blob/develop/.github/workflows/deploy.yml] in our public repository.

Simply initialize Quant with a one-liner to prevent interactive setup with environment variables, e.g:
```
quant init -c ${QUANT_CUSTOMER} -t '${QUANT_TOKEN}' --project=${QUANT_PROJECT} -e 'https://api.quantcdn.io' -d ${BUILD_DIRECTORY}
```

Then run a Quant deployment to push content:
```
quant deploy
```