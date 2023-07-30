---
sidebar_position: 2
description: How to publish a web server using Narrowlink
keywords: [Publish Webserver, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Webserver Publish

You can publish a web server using Narrowlink. The gateway will automatically issue a certificate for the domain name and publish the web server. For example, [narrow.host](https://narrow.host) is a web server that is published using Narrowlink, while its backend is running in a highly restricted network.


To publish a web server using Narrowlink, you need to have a valid domain name with an `A` or `CNAME` DNS record that points to the gateway address. Then, you need to generate a publish token that will be used by the agent to publish the web server. To generate a publish token, you can add the following lines to the [Token Generator](/docs/token-generator) configuration file:

```yaml
secret: [1,2,3,4] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  #- !Agent # agent token
  # ...
  #- !Client # client token
  # ...
  - !AgentPublish # agent publish token to publish web services
    uid: 00000000-0000-0000-0000-000000000001 # agent uid, please use a unique uid for each user
    name: agent_name # agent name, it must be the same name as the agent name in the agent token
    exp: 1710227806 # expiration time in seconds since epoch (Monday, January 1, 2024 0:00:00 GMT)
    connect: # list of the services that this agent will publish
    publish_hosts: # list of the services that this agent will publish
    - host: first.domain.ltd # domain name
      port: 0 # gateway's service port, 0 means any port
      connect: # the address that the agent will connect to publish the service
        host: 127.0.0.1 # ip address or domain name
        port: 8080 # port
        protocol: HTTP # protocol
    - host: second.domain.ltd # domain name
      port: 0 # gateway's service port, 0 means any port
      connect: # the address that the agent will connect to publish the service
        host: narrow.host # ip address or domain name
        port: 443 # port
        protocol: HTTPS # protocol
```


The `uid` and `name` fields must be the same as the `uid` and `name` in the agent token. Once a request is received from the gateway, it automatically inserts the `NL-Connecting-IP` header to the request. This header contains the IP address of the client. You can use this header to detect the IP address of the client.

:::tip
You can use a wildcard in the domain name to publish multiple services without reconfiguring the DNS server every time. For example, you can use `*.domain.ltd` to publish all subdomains of `domain.ltd`.
:::

After generating the publish token, you need to add the token to the agent configuration file:

```yaml
#...
publish: eyJ0eX....kNHYQ_4 # publish token to configurre the agent to publish web services
#...
```

Now, you can run the agent and publish the web server. The gateway will automatically issue a certificate for the domain name and publish the web server.
