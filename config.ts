import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_facilitator");

config.google_drive = {
  sheets_folder_ids: ["1k8zJfBeOm18gYDsk0XmdUm7OFtZDUY9R"],
  assets_folder_ids: ["1KcHDI7O4o2_FZ_YlXsz-8OqN3ehsfdVf"],
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-facilitator-app-content.git",
  content_tag_latest: "1.1.13",
};

config.api.db_name = "plh_facilitator"
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "FacilitatorApp";
config.app_config.APP_HEADER_DEFAULTS.title = "FacilitatorApp";
config.app_config.APP_HEADER_DEFAULTS.collapse = false;
config.app_config.APP_HEADER_DEFAULTS.variant ="compact";
config.app_config.APP_HEADER_DEFAULTS.colour = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from FacilitatorApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from FacilitatorApp";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";

config.error_logging = { dsn: "https://d833ed6883e0415caa2f166434ad8c13@app.glitchtip.com/5663"};

export default config;
