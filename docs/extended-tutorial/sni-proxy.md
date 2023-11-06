---
sidebar_position: 11
description: How to publish webserver without TLS offloading
keywords: [SNI proxy, Webserver, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# SNI Proxy

In some scenarios, you may need to publish a web server and prefer not to trust the gateway with decrypting your TLS communication and managing your private key. In such cases, Narrowlink offers a powerful feature called SNI (Server Name Indication) proxy. With SNI proxy, you can publish your web server without TLS offloading, leaving the TLS communication and cryptographic operations to be handled directly by the agent. This provides an added layer of security and control over your agent's web services.

:::info Support of non-http protocols
Using the SNI proxy, is not limited to HTTP communication. In fact, you can publish any TLS-based protocol, including HTTPS and FTPS, and more. However, the gateway will not be able to inspect the traffic, and the agent will not be able to detect the remote IP address of the client. In such cases, you can use the `NL-Connecting-IP` header to detect the remote IP address of the client.
:::

To set up the SNI proxy, you need to create a special publish token that instructs the gateway to forward communication to the agent at the TLS layer. Here's how you can configure your publish token:

```yaml
secret: [1,2,3,4] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  #- !Agent # agent token
  # ...
  #- !Client # client token
  # ...
  - !AgentPublish # agent publish token to publish web services
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, it must be the same name as the agent name in the agent token
    exp: 1710227806 # expiration time in seconds since epoch
    publish_hosts: # list of the services that this agent will publish
      - host: tls.domain.example # domain name
        port: 443 # gateway's service port, 0 means any port
        connect: # the address that the agent will connect to publish the service
          host: 127.0.0.1 # ip address or domain name
          port: 443 # port
          protocol: TCP # protocol, TCP means it acts as a SNI proxy
      - host: tls.domain.example # domain name
        port: 80 # gateway's service port, 0 means any port
        connect: # the address that the agent will connect to publish the service
          host: 127.0.0.1 # ip address or domain name
          port: 80 # port
          protocol: HTTP # protocol
```

In the above configuration, you have two hosts with the same domain name but different ports. The first one is for TLS communication (port 443), and the second one is for HTTP communication (port 80). The gateway will forward the TLS communication to the agent without any modifications, allowing the agent to handle the TLS communication directly.


By utilizing the SNI proxy feature, your agents can confidently publish their web services while retaining full control over TLS security and cryptographic operations.
