import { initialize } from 'unleash-client';

const unleash = initialize({
    url: process.env.UNLEASH_URL,
    appName: 'default',
    customHeader: { Authorization: UNLEASH_TOKEN }
})