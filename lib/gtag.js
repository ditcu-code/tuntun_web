export const GA_MEASUREMENT_ID = "G-0PD8EKWHLQ"

export const pageview = () => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}