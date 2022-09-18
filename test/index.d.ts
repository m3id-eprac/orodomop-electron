import { WebdriverIOQueriesSync } from '@testing-library/webdriverio'

declare global {
    namespace WebdriverIO {
        interface Browser extends WebdriverIOQueriesSync {}
        interface Element extends WebdriverIOQueriesSync {}
    }
}





