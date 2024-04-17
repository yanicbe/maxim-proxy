# No VPN
This is an API to check if a certain IP comes from a VPN. It uses [focsec](https://focsec.com/) for it's data. You can't just call focsec from the frontend, because this would expose your api key. This API adds an extra layer of security on top of focsec.

```html
<script
  data-no-vpn-key="<your-api-key>"
  data-vpn-redirect="https://<redirect>/"
>
  (function () {
    const headers = new Headers();
    headers.set("Authorization", document.currentScript.dataset["no-vpn-key"]);
    fetch("https://www.novpn.ch/api/v0", {
      headers,
    })
      .then((res) => {
        if (!res.ok) throw "Could not verify if user uses vpn";
        return res.json();
      })
      .then((body) => {
        if (res.isVPN)
          window.location.replace(
            document.currentScript.dataset["vpn-redirect"]
          );
      })
      .catch(console.error);
  })();
</script>
```
