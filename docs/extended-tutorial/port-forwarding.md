---
sidebar_position: 4
description: How to set up port forwarding using Narrowlink
keywords: [Port Forwarding, RDP, SSH, TCP, UDP, NAT, Firewall, Proxy, Reverse Proxy, Tunnel, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide,Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Port Forwarding

The client allows you to easily set up port forwarding through client-to-agent connections, enabling you to connect to various services such as RDP.

To perform port forwarding you can run ```narrowlink forward``` command. This command will forward the traffic from a local port to a remote port through the agent network.

```bash
narrowlink forward --help
Create a tunnel 

Description:
  Creates a tunnel between agent and client

Examples:
  narrowlink forward -n <agent name> <remote_addr:remote_port>
  narrowlink f -usn <agent name> <remote_addr:remote_port>

Options:
  -n, --name=       The name of the agent
  -l, --local=      The local address and port to bind
  -s, --silent      Do not check whether the target address and port reachable or not
  -k, --key=        The secret key for end-to-end encryption
  -u, --udp=        Use UDP instead of TCP
```

:::note
Using the ```-s``` option will disable the reachability check of the target address and port. In default mode, the client will send a packet before forwarding the traffic to check the reachability of the target address and port.
:::

As an example, let's assume that you want to forward RDP traffic from a remote machine to your local machine. To do this, you need to run the following command on your local machine:

```bash
narrowlink forward -k <secret> -n <agent_name> -l <local_ip>:<local_port> <remote_ip>:<remote_port>
```

- `<secret>`: The passphrase for End-to-end encryption. Choose a strong and secure passphrase.
- `<agent_name>`: The name of the agent. Choose a descriptive name for easy identification.
- `<local_ip>`: The local IP address you want to bind for forwarding. This is the IP address of your local machine.
- `<local_port>`: The local port number you want to use for forwarding. Choose an available port number.
- `<remote_ip>`: The IP address of the remote machine running a service.
- `<remote_port>`: The port number of the remote machine.

So the command will be like this:

```bash
narrowlink forward -k mysecret -n office -l 127.0.0.1:3389 192.168.1.200:3389
```

Now, you can use your RDP client to connect to the local IP address and port number you specified in the command. This will forward the RDP traffic to the remote machine and establish the RDP connection.

Well done! You have successfully learned and set up port forwarding for RDP using the Narrowlink client.
