// Download availability system / Sistema de disponibilidad de descargas
//
// Controlled from src/config/downloads.json:
//   - "enabled": locks EVERY download button on the site (header, home,
//     ISO page, Bitten Fruit...).
//   - "disabledMessage": shown on the disabled buttons when locked.
import config from "@/config/downloads.json";

export interface DownloadAvailability {
    enabled: boolean;
    message: string;
}

export function downloadAvailability(): DownloadAvailability {
    return {
        enabled: config.enabled,
        message: config.disabledMessage,
    };
}
