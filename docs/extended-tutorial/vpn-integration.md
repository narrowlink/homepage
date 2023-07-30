---
sidebar_position: 8
description: How to access to the shared network globally on your machine using Narrowlink
keywords: [VPN, Integration, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# VPN Integration

You can integrate NarrowLink with [sing-box](https://github.com/SagerNet/sing-box) to access to the shared network globally on your machine. Altough it is not considered as actual VPN, however it is a good solution for accessing to the shared network globally.

To integrate NarrowLink with sing-box, you need to install sing-box on your machine and then configure it to use NarrowLink as its network provider. Then you need to run the NarrowLink client on your machine as a local SOCKS proxy server.

```bash
narrowlink p -n <agent_name> -l 127.0.0.1:1080
```

Then you need to use a configuration file for sing-box like the following to create a VPN interface that uses the NarrowLink client as its network provider:

```json
{
  "log": {},
  "dns": {},
  "ntp": {},
  "inbounds": [
    {
      "type": "tun",
      "inet4_address": "192.168.255.200/30",
      "auto_route": true,
      "strict_route": false,
      "sniff": true
    }
  ],
  "outbounds": [
    {
      "type": "socks",
      "tag": "socks-out",
      "server": "127.0.0.1",
      "server_port": 1080,
      "version": "5"
    },
    {
      "type": "direct",
      "tag": "direct"
    }
  ],
  "route": {
    "auto_detect_interface": true,
    "rules": [
      {
        "port": [
          443,
          80
        ],
        "domain": [
          "gateway.domain.ltd"
        ],
        "outbound": "direct"
      }
    ]
  },
  "experimental": {}
}
```

please note that you need to replace `gateway.domain.ltd` with the actual address of the gateway.

You can use the following command to run sing-box with the above configuration file:

```bash
sudo sing-box run -c sing-box.json
```

Done. Now you can use the VPN interface to access to the shared network globally.