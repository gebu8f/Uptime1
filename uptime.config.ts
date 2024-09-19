const pageConfig = {
  // Title for your status page
  title: "Uptime",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.gebu8f.eu.org', label: '主站' },
    { link: 'mailto: public@mail.gebu8f.eu.org', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'official_monitor',
      name: '官網',
      method: 'GET',
      target: 'https://www.gebu8f.eu.org',
      },
    {
      id: 'vice_website_monitor',
      name: '副網',
      method: 'GET',
      target: 'https://www.gebu8f.pp.ua',
      },
    {
      id: 'apps_website_monitor',
      name: '阿蒲的推薦軟體',
      method: 'GET',
      target: 'https://gebu8f6479.pp.ua',
      },
    //{
    //id: 'mcserver_monitor',
      //name: 'Minecraft伺服器',
      //method: 'TCP_PING',
      //target: 'papaya.fps.ms:26300',
    //},
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Taipei",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
