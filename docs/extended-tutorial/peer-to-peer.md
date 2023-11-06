---
sidebar_position: 1
description: How to use peer-to-peer mode in Narrowlink
keywords: [Publish Webserver, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Peer to Peer Connectvity

Narrowlink allows you to establish a direct connection between clients and agents, even if they are behind NAT or a firewall, using the QUIC protocol. In other words, Narrowlink can traverse NAT and firewalls to establish a peer-to-peer connection between clients and agents, providing a faster and more secure connection. Narrowlink's flexible architecture enables you to use it in various scenarios.

## Connection Modes

There are two different modes to establish a connection between a client and an agent. One is the relay mode, where the gateway is in the middle (`client-to-gateway-to-agent`), and the other is the direct mode, where the gateway is not in the middle (`client-to-agent`). The direct mode is faster, offers better latency, and is more secure than the relay mode because the gateway is not involved.

## Default Behavior

Narrowlink prioritizes the direct mode over the relay mode. However, the direct mode is not always possible. For example, if both the client and agent are behind a symmetric NAT, the direct mode is not feasible. In this case, Narrowlink will use the relay mode to establish a connection between the client and agent. Establishing the direct mode can sometimes be time-consuming. In such cases, Narrowlink will use the relay mode to establish a connection between the client and agent while simultaneously attempting to establish a direct connection between them. If the direct connection is established, Narrowlink will use it and stop the relay connection. If the direct connection is not established, Narrowlink will continue to use the relay connection.

## Taking Control Over Connection Mode

Sometimes, you may want to take control over the connection mode. For instance, you may prefer to use the relay mode even if the direct mode is possible, or you may want to attempt the direct mode only and, if not possible, terminate the connection. Narrowlink provides a simple way to take control over the connection mode.

All the tunneling-related commands in the Narrowlink client have two arguments: `--direct` and `--relay`. The `--direct` argument will attempt to establish a direct connection solely between the client and agent. If it is not possible, the connection will be terminated. On the other hand, the `--relay` argument uses the relay mode to establish a connection between the client and agent, regardless of whether the direct mode is feasible or not.

## NAT Traversal

Narrowlink does not require an always-running daemon or privileged access to establish peer-to-peer connections. It also does not rely on any STUN protocol or the broadcasting of packets within the network to establish peer-to-peer connections. Narrowlink utilizes the gateway as a rendezvous server to exchange connection information between the client and agent. The gateway does not have access to the data; it merely facilitates the exchange of connection information between the client and agent. The client and agent use this exchanged information to establish a peer-to-peer connection.

## Example

### Peer-to-Peer SSH Connection

Suppose you wish to establish a peer-to-peer SSH connection between your client and agent, with both entities situated behind a NAT. To achieve this, you must configure your SSH client by adding the `-d` flag to the `narrowlink connect` command.

```bash
Host <agent_name>
    ProxyCommand narrowlink connect -d -n %n %h:%p
    HostName 127.0.0.1
    Port 22
    User <username> 
```

You can expect similar behavior to the following example:

```bash
$which ssh
/usr/bin/ssh

$ssh -V
OpenSSH_9.4p1, LibreSSL 3.3.6

$ssh miranda
2023-11-06T00:58:40.877428Z  INFO narrowlink::manage: Connecting to gateway: gateway.narrow.link:443
2023-11-06T00:58:41.368539Z  INFO narrowlink::manage: Connection to gateway successful
2023-11-06T00:58:41.421467Z  INFO narrowlink::transport: tcp://127.0.0.1:22 is on hold and waiting to create the direct channel
2023-11-06T00:58:41.444643Z  INFO narrowlink::transport: Trying to create a direct (peer-to-peer) channel
2023-11-06T00:58:42.135683Z  INFO narrowlink::transport: The direct channel has just been established
Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-86-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

This system has been minimized by removing packages and content that are
not required on a system that users do not log into.

To restore this content, you can run the 'unminimize' command.
Last login: Mon Nov  6 00:58:16 2023 from 127.0.0.1
sajjad@miranda:~$
```
