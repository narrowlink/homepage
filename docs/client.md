---
sidebar_position: 5
description: How does Narrowlink client work?
keywords: [Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Client

The Narrowlink client is a versatile and powerful tool that offers a wide range of features to access net network resource by connecting to the agent thorough of the gateway. From setting up sock proxy servers to connecting to share internet access of a computer behind of a net network to connect their services like RDP and SSH, It also offers end-to-end encryption based on Xchacha20 and SHA3 for enhanced security.

In this documentation, we will provide an overview of the Narrowlink client, its features, and practical examples of how it can be used in different scenarios. We will also cover installation instructions, configuration steps, and compliance considerations to ensure proper usage of Narrowlink in accordance with applicable laws and regulations.

Whether you are a network administrator, developer, or an open-source enthusiast, the Narrowlink client offers a flexible and powerful solution for managing your network configuration needs. Let's dive in and explore the capabilities of Narrowlink client for your networking requirements.

## Features of Narrowlink Client

- Sharing internet access of computer behind NAT networks.
- Connecting to private network services like RDP and SSH.
- End-to-end encryption based on Xchacha20 and SHA3.
- Remote address autnetication by using HMAC.

## Sample Configuration

```yaml
gateway: gateway.domain.example:443 # address of the gateway
token: eyJ0eX....kNHYQ_4 # token for authentication
service_type: Wss # Wss or Ws (default: Wss)
```

:::note
Please note that the client's configuration file must be located in the same folder as the client executable file with the name `client.yaml`.

Alternatively, it can be found in the following paths:

```bash
$HOME/.narrowlink/client.yaml
```

or

```bash
Linux: /home/<username>/.config/narrowlink/client.yaml
Mac: /Users/<username>/Library/Application Support/narrowlink/client.yaml
Windows: C:\Users\<username>\AppData\Roaming\narrowlink\client.yaml
```

:::

## Practical Examples

Here are some practical examples of how you can use Narrowlink client:

- [Setting up a local proxy server](/docs/extended-tutorial/share-network-access/) to share internet access of another computer behind a restricted NAT network:

`narrowlink proxy -n office 192.168.1.100:8080`

- [Port forwarding](/docs/extended-tutorial/port-forwarding/) to connect to a remote desktop service (RDP):

`narrowlink forward -n office -l 127.0.0.1:3389 127.0.0.1:3389`

- [Connecting to a SSH](/docs/extended-tutorial/ssh-integration/) server:

```bash
cat ~/.ssh/config
Host <agent>
    ProxyCommand office connect -n <agent> %h:%p
    HostName 127.0.0.1
    Port 22
    User <username>
```

That's it! These are just a few examples of the many capabilities of Narrowlink client.

You can explore more features and options by exploring the documentation and experimenting with different command line options.
Happy networking with Narrowlink!
