export const environment = {
    production: false,
    apiBaseUrl: "https://uottawaqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://uottawaqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d41fdab1-7e15-4cfd-b5fa-7200e54deb6b",
        clientId: "d1598541-831b-4c11-afce-38ecb8e53ed0",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
