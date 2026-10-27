import { GlobalRegistrator } from "@happy-dom/global-registrator";

// next/image resolves relative srcs against window.location.href, which is "about:blank" by default
GlobalRegistrator.register({ url: "http://localhost:3000" });
