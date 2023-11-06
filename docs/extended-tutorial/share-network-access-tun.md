---
sidebar_position: 4
description: How to share network access using Narrowlink using TUN interface
keywords: [Share Network Access, Proxy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel, TUN]
---

# Share Network Access (TUN)
:::warning Experimental and unstable
This feature is experimental and unstable. It may not work as expected, so use it at your own risk. We are working diligently to make it stable and reliable.

We highly appreciate your [**contributions**](https://github.com/narrowlink/narrowlink/blob/main/CONTRIBUTING.md) and [**sponsorship**](https://github.com/narrowlink/narrowlink/blob/main/SPONSORSHIP.md) to help us improve this feature.
:::

The Narrowlink client utlizes the TUN driver to create a fake virtual network interface, which requires privileged access. This interface can be used to forward the network traffic to the agent network.

```bash
narrowlink tun --help
Create a TUN tunnel

Usage:
  narrowlink tun [OPTIONS]

Description:
  Creates a TUN interface to connect to a remote endpoint
   ***          Experimental and Unreliable          ***
   **      Use it at your own risk and discretion     **
   *This is a work in progress and not production ready*

Examples:
  narrowlink tun -n <agent name>
  narrowlink t -gdn <agent name> -k <key> -m <ip>=<ip>

Options:
  -g, --gateway     Use as default gateway
  -d, --direct      Direct connection to the remote endpoint (peer-to-peer)
  -r, --relay       Relay connection to the remote endpoint (peer-to-gateway-to-peer)
  -n, --name=       The name of the agent (required)
  -k, --key=        The secret key for end-to-end encryption
  -l, --local=      The local address to bind to
  -m, --map=        Map an IP address%
```

:::info Windows Users Only
To use the TUN feature on Windows, you need to download [Wintun](https://www.wintun.net/) and place it in the same directory as the Narrowlink client. You can download the latest version of Wintun from [here](https://www.wintun.net/).
:::

Execute the following command with privileged access, replacing the placeholder values with your actual values:

`narrowlink tun -gn <agent_name>` 

- `<agent_name>`: The name of the agent. Choose a descriptive name for easy identification.

For example, to setup a tun interface as use it as default gateway to forward the traffic to your remote machine with the name of `office`, you would use the following command:

`narrowlink tun -gn office` 

You can use the `-m` argument to map the IP addresses of your local network to the IP addresses of the agent's network. This feature is useful for various scenarios, including when the agent can only use a specific DNS resolver, and you want to redirect the DNS traffic to the agent's network without changing the DNS resolver of your local machine.


Congratulations! You have successfully set up a TUN interface to share internet access through the office agent.