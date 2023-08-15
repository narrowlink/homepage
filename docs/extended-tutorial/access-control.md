---
sidebar_position: 5
description: How to set up access control using Narrowlink
keywords: [Access Control, Security, Privacy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Zero-trust, Remote-access, Remote-work, Remote-connection]
---

# Access Control

You can restrict client access to your agents by using access control. The access control mechanism works based on whitelisting and blacklisting, allowing you to limit access to agents based on specific criteria:

    IP address range and port number of the request
    Domain and port number of the request (checked on both the agent and gateway sides)
    Entire agent, making it completely inaccessible

To utilize access control, you need to configure policies for your clients. In the example provided in the basic tutorial, we used the following policy to allow access to all agents:

```yaml
    exp: 1704067200 # expiration time in seconds since epoch (Monday, January 1, 2024 0:00:00 GMT)
    policies: # policies for this client
      permit: true # whitelist mode
      policies: # list of policies
        - !Any # any type of protocols
          - null # agent name, null means any agent
          - true # allow or deny this agent
```

You can set the value of `permit` to false if you want to use blacklisting mode. Setting it to true represents whitelisting.

:::tip
You can create different client tokens with short validity periods and different policies to implement zero trust network access (ZTNA) or temporarily share your local services with others.
:::

Using `!Any` allows any destination. Alternatively, you can use `!IP` or `!Domain` to specify a particular destination. For instance, you can use `!IP` to define an IP address range and port number, or `!Domain` to specify a domain name and port number. You can also combine multiple policies to create a more fine-grained access control mechanism.


Please refer to the following examples to understand how to use access control:

```yaml
    policies:
      permit: false # blacklist mode
      policies:
        - !Ip # policy based on the destination ip address
          - office # agent name
          - 192.168.0.0/24 # destination ip range
          - 22 # destination port
          - TCP # protocol
```
This example demonstrates a blacklist policy for the client. It means that the client can access all agents except the agent named `office` for connections to the IP address range `192.168.0.0/24` on port `22`.

-------

```yaml
    policies: 
      permit: true # whitelist mode
      policies:
        - !Domain # policy based on the destination domain name
          - lab # agent name
          - narrow.host # destination domain address
          - 443 # destination port
          - TCP # protocol
```

This policy allows the client to only access the agent named `lab` for connections to the domain name `narrow.host` on port `443`. It is useful when you want to grant access to a specific web service in your restricted network.

-------

```yaml
    policies:
      permit: true # whitelist mode
      policies:
        - !Any # any type of protocols
          - test # agent name, null means any agent
          - true # please use it the same as permit currently
        - !Domain # policy based on the destination domain name
          - lab # agent name, null means any agent
          - narrow.host # destination domain name
          - 443 # destination port
          - TCP # protocol
```

This policy allows the client to access the agent named `test` for any destination, or connect to the `narrow.host` domain with port `443` using the `lab` agent as an intermediary.
