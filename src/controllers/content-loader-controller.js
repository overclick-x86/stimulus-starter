import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static values = { url: String, refreshInterval: Number }

    startRefershing() {
        setInterval(() => {
            this.load()
        }, this.refreshIntervalValue);
    }

    connect() {
        this.load()

        if (this.hasRefreshIntervalValue) {
            this.startRefershing()
        }
    }

    load() {
        fetch(this.urlValue)
            .then(response => response.text())
            .then(html => this.element.innerHTML = html)
    }
}