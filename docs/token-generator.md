---
sidebar_position: 8
description: How to use generate tokens for the client and agent components in Narrowlink.
keywords: [Token Generator, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Token Generator

Token generator is a minimal component of Narrowlink that is responsible for generating tokens used to authenticate and configure clients and agents. This component is not actively involved in the Narrowlink infrastructure and is only used to generate tokens for the client and agent components. It receives a configuration file that contains the secret and a list of tokens and generates the tokens. The configuration file is in YAML format. The following is an example of a configuration file:


## Client

```yaml
  - !Client # client token
    uid: 00000000-0000-0000-0000-000000000000 # client uid, please use a unique uid for each user
    name: client_name_2 # client name, please use a unique name for each client
    exp: 1710227806 # expiration time in seconds since epoch
    policies: # policies for this client
      permit: true # whitelist mode
      policies: # list of policies
        - !Ip # policy based on the destination ip address
          - null # agent name, null means any agent
          - 192.168.0.1/24 # destination ip address
          - 22 # destination port
          - TCP # protocol
        - !Domain # policy based on the destination domain name
          - agent_name_1 # agent name, null means any agent
          - narrow.host # destination domain name
          - 443 # destination port
          - TCP # protocol
        - !Any # any type of protocols
          - agent_name_3 # agent name, null means any agent
          - true # allow or dency this agent
        - !Any # any type of protocols
          - agent_name_4 # agent name, null means any agent
          - true # allow or dency this agent
```

## Agent

```yaml
  - !Agent # agent token
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, please use a unique name for each agent
    exp: 1710227806 # expiration time in seconds since epoch
```

## Publish

```yaml
  - !AgentPublish # agent publish token to publish web services
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, it must be the same name as the agent name in the agent token
    exp: 1710227806 # expiration time in seconds since epoch
    connect: # list of the services that this agent will publish
      narrow.host: # domain name
        addr: # the address that the agent will connect to publish the service
          - 127.0.0.1 # ip address or domain name
          - 8080 # port
        protocol: HTTP # protocol
      me.narrow.host: # domain name
        addr: # the address that the agent will connect to publish the service
          - narrow.host # ip address or domain name
          - 80 # port
        protocol: HTTP # protocol

```

## A complete example

```yaml

secret: [2,0,2,3,0,8,1,8] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  - !Client # client token
    uid: 00000000-0000-0000-0000-000000000000 # client uid, please use a unique uid for each user
    name: client_name_1 # client name, please use a unique name for each client
    exp: 1710227806 # expiration time in seconds since epoch
    policies: # policies for this client
      permit: true # whitelist mode
      policies: # list of policies
        - !Any # any type of protocols
          - null # agent name, null means any agent
          - true # allow or dency this agent

  - !Client # client token
    uid: 00000000-0000-0000-0000-000000000000 # client uid, please use a unique uid for each user
    name: client_name_2 # client name, please use a unique name for each client
    exp: 1710227806 # expiration time in seconds since epoch
    policies: # policies for this client
      permit: true # whitelist mode
      policies: # list of policies
        - !Ip # policy based on the destination ip address
          - null # agent name, null means any agent
          - 192.168.0.1/24 # destination ip address
          - 22 # destination port
          - TCP # protocol
        - !Domain # policy based on the destination domain name
          - agent_name_1 # agent name, null means any agent
          - narrow.host # destination domain name
          - 443 # destination port
          - TCP # protocol
        - !Any # any type of protocols
          - agent_name_3 # agent name, null means any agent
          - true # allow or dency this agent
        - !Any # any type of protocols
          - agent_name_4 # agent name, null means any agent
          - true # allow or dency this agent

  - !Agent # agent token
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, please use a unique name for each agent
    exp: 1710227806 # expiration time in seconds since epoch

  - !AgentPublish # agent publish token to publish web services
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, it must be the same name as the agent name in the agent token
    exp: 1710227806 # expiration time in seconds since epoch
    connect: # list of the services that this agent will publish
      narrow.host: # domain name
        addr: # the address that the agent will connect to publish the service
          - 127.0.0.1 # ip address or domain name
          - 8080 # port
        protocol: HTTP # protocol
      me.narrow.host: # domain name
        addr: # the address that the agent will connect to publish the service
          - narrow.host # ip address or domain name
          - 80 # port
        protocol: HTTP # protocol
```
