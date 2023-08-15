---
sidebar_position: 8
description: How to use generate tokens for the client and agent components in Narrowlink.
keywords: [Token Generator, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Self-hosted, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel]
---

# Token Generator

The Token Generator is a lightweight and temporary[^1] component within the Narrowlink system. Its main purpose is to generate tokens used for authentication and configuration across the Narrowlink ecosystem. Unlike other core components, this element has a limited role and does not play an active part in the ongoing Narrowlink infrastructure. Its sole function is to produce tokens for both client and agent components. It functions by taking a configuration file that includes a secret and a roster of tokens, then proceeds to generate the tokens.

:::danger
The UID is a unique identifier for each user space. It is employed to distinguish between agents and clients associated with the same user. The UID is not linked to the user's personal identity. Using the same UID for different users can result in these users being able to access each other's agents.
:::

These configuration files are structured in YAML format. Comprehensive examples of configuration files for each specific component are available in the following:

## Client Token

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
          - true # allow or deny this agent
        - !Any # any type of protocols
          - agent_name_4 # agent name, null means any agent
          - true # allow or deny this agent
```

## Agent Token

```yaml
  - !Agent # agent token
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, please use a unique name for each agent
    exp: 1710227806 # expiration time in seconds since epoch
```

## Publish Token

```yaml
  - !AgentPublish # agent publish token to publish web services
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, it must be the same name as the agent name in the agent token
    exp: 1710227806 # expiration time in seconds since epoch
    publish_hosts: # list of the services that this agent will publish
    - host: narrow.host # domain name
      port: 0 # gateway's service port, 0 means any port
      connect: # the address that the agent will connect to publish the service
        host: 127.0.0.1 # ip address or domain name
        port: 80 # port
        protocol: HTTP # protocol
    - host: tls.narrow.host # domain name
      port: 0 # gateway's service port, 0 means any port
      connect: # the address that the agent will connect to publish the service
        host: 127.0.0.1 # ip address or domain name
        port: 443 # port
        protocol: TCP # protocol, TCP means it acts as a SNI proxy
```

## A complete example

```yaml
secret: [2,0,2,3] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
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
          - true # allow or deny this agent

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
          - true # allow or deny this agent
        - !Any # any type of protocols
          - agent_name_4 # agent name, null means any agent
          - true # allow or deny this agent

  - !Agent # agent token
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, please use a unique name for each agent
    exp: 1710227806 # expiration time in seconds since epoch

  - !AgentPublish # agent publish token to publish web services
    uid: 00000000-0000-0000-0000-000000000000 # agent uid, please use a unique uid for each user
    name: agent_name_3 # agent name, it must be the same name as the agent name in the agent token
    exp: 1710227806 # expiration time in seconds since epoch
    publish_hosts: # list of the services that this agent will publish
    - host: narrow.host # domain name
      port: 0 # gateway's service port, 0 means any port
      connect: # the address that the agent will connect to publish the service
        host: 127.0.0.1 # ip address or domain name
        port: 80 # port
        protocol: HTTP # protocol
    - host: tls.narrow.host # domain name
      port: 0 # gateway's service port, 0 means any port
      connect: # the address that the agent will connect to publish the service
        host: 127.0.0.1 # ip address or domain name
        port: 443 # port
        protocol: TCP # protocol, TCP means it acts as a SNI proxy
```


## Default Configuration Paths

The token-generator can load configuration from a custom path using the `-c` or `--config` flag or from its default paths.

The default paths are as follows:

1. Next to the token-generator executable file with the name `token-generator.yaml`
2. In the operating system's configuration directory within a folder named `.narrowlink`, with the file named `token-generator.yaml`

Example path:
```bash
$HOME/.narrowlink/token-generator.yaml
```
3. In the operating system's configuration directory within a folder named `narrowlink`, with the file named `token-generator.yaml`

Configuration paths for different operating systems:

| OS | PATH |
|:-:|:-:|
| Linux | `/home/<username>/.config/narrowlink/token-generator.yaml` |
| MacOS | `/home/<username>/.config/narrowlink/token-generator.yaml` |
| Windows | `/home/<username>/.config/narrowlink/token-generator.yaml` |

To explore more features and options, refer to the [Extended Tutorial](/docs/category/extended-tutorial) section or experiment with different command line options.


[^1]: The token-generator component is temporary and will be integrated into a web interface in the future.