---
sidebar_position: 6
description: How to secure your connections using end-to-end encryption
keywords: [End-to-end Encryption, Security, Privacy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Xchacha20-Poly1305, HMAC-SHA256]
---

# End-to-end Encryption

Setting up end-to-end encryption is easy. You just need to add a key to the agent configuration and the same key to the client command arguments.

You can set the key in the agent configuration by adding the following line to the agent configuration file:

```yaml
key: "your_key"
```

Then, you need to add the same key to the client command arguments:

```bash
narrowlink forward -k your_key ...
narrowlink proxy -k your_key ...
narrowlink connect -k your_key ...
```

:::note
Please note that the key must be the same for both the agent and the client. Also, avoiding the use of the key will result in the absence of end-to-end encryption.
:::
