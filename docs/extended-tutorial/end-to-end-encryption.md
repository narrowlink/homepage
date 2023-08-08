---
sidebar_position: 6
description: How to secure your connections using end-to-end encryption
keywords: [End-to-end Encryption, Security, Privacy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Xchacha20-Poly1305, HMAC-SHA256]
---

# End-to-end Encryption

Narrowlink relies on selected transport protocols for data encryption by default. If you use the `Wss` protocol (WebSocket <ins>with</ins> TLS), your data will be encrypted, which is enabled by default. However, if you use `Ws` (WebSocket <ins>without</ins> TLS), your data will be sent in plain text. Additionally, these protocols serve as transport methods, so if you choose a secure transport protocol, your communication is only encrypted between the client and the gateway, as well as between the agent and the gateway. As a result, the gateway retains the capability to access your packets. To add an extra layer of security to your data, you can utilize end-to-end encryption.

Narrowlink employs the `Xchacha20-Poly1305` algorithm for end-to-end encryption, along with `SHA-3` based `HMAC-SHA256` for signing tunnel destinations. Both encryption and signing processes take place on both the client and agent sides, requiring manual key transfer.

## Enabling End-to-End Encryption

Setting up end-to-end encryption is a straightforward process. You need to establish a shared key between the client and the agent. This key will be used for both encryption and decryption of data.

1. Agent Configuration Setup:

In the agent configuration file, you must insert the following line:

```yaml
key: "your_key"
```
Replace "your_key" with the actual key you want to use for encryption.

2. Client Command Setup:

You need to use the same key to the client command arguments by adding `-k` or `--key` flag to your command, for example:

```bash
narrowlink forward -k your_key ...
narrowlink proxy -k your_key ...
narrowlink connect -k your_key ...
```

:::caution
The use of end-to-end encryption in Narrowlink is optional. Only packets marked as encrypted will undergo encryption. Unencrypted packets can still be processed by the agent if they are not marked as encrypted (without adding `-k` or `--key`).
:::
