---
sidebar_position: 6
description: How to set up access control using Narrowlink
keywords: [Access Control, Security, Privacy, Gateway, Agent, Client, Narrowlink, Narrow, Link, Networking, Internet, Security, Privacy, Open Source, Tutorial, How-to, Guide, Nat, Firewall, Proxy, Reverse Proxy, Tunnel,Nat, Firewall, Proxy, Reverse Proxy, Tunnel, Zero-trust, Remote-access, Remote-work, Remote-connection]
---

# Access Control

You can restrict client access to your agents by using access control. The access control mechanism works based on whitelisting and blacklisting, allowing you to limit access to agents based on specific criteria:

- IP address range and port number of the request
- Domain and port number of the request (checked on both the agent and gateway sides)
- Entire agent, making it completely inaccessible

To utilize access control, you need to configure policies for your clients. In the example provided in the basic tutorial, we did not set any policies for the client, so it was able to access all agents. However, you can set policies for your clients to restrict access to specific agents.

You need to generate a client policy token with your desired policies, then add its policy id to the client token. Follow the same steps as you did in the basic tutorial for generating a token, but modify the token-generator.yaml file as shown below:

```yaml
secret: [1,2,3,4] # The secret for signing tokens, It must be the same as the gateway token secret, it is as byte array
tokens: # list of tokens
  - !Client # client token
    uid: 00000000-0000-0000-0000-000000000000 # client uid, please use a unique uid for each user
    name: client_name_2 # client name, please use a unique name for each client
    exp: 1710227806 # expiration time in seconds since epoch
    policies: [1025] # list of policy ids, it must be the same as the policy id in the client policy token and between 1025 and 65535, all the policies must be satisfied

  - !ClientPolicy # client policy token
    uid: 00000000-0000-0000-0000-000000000000 # client uid, please use a unique uid for each user
    name: client_name_1 # client name, please use a unique name for each client
    exp: 1710227806 # expiration time in seconds since epoch
    pid: 1025 # policy id, it must be the same as the policy id in the client token and between 1025 and 65535
    policy: # policies for this client
      type: !WhiteList # !WhiteList or !BlackList
      policies: # list of policies
        - !Ip # policy based on the destination ip address
          - !Any # !Any means any agent, !Agent agent_name means the agent with the name agent_name
          - 192.168.0.1/24 # destination ip address
          - 22 # destination port
          - TCP # protocol
        - !Domain # policy based on the destination domain name
          - !Agent agent_name # !Any means any agent, !Agent agent_name means the agent with the name agent_name
          - narrow.page # destination domain name
          - 443 # destination port
          - TCP # protocol
```

This configuration contains two parts, `Client` and `ClientPolicy`. You have already familiarized yourself with the `Client` token in the basic tutorial; however, in this example, we have added a `policies` field to the `Client` token. This field contains a list of policy ids that the client must satisfy. In this example, the client must satisfy the policy with id 1025. We also created a ClientPolicy token with id 1025 and added the policies to it. The policies are defined in the policy field.

You can use `!IP` or `!Domain` to specify a particular destination. For instance, you can use `!IP` to define an IP address range and port number, or `!Domain` to specify a domain name and port number. The line after the policy type defines which agent the policy applies to. You can use `!Any` to apply the policy to all agents, or `!Agent agent_name` to apply the policy to a specific agent. The next line defines the destination, which can be an IP address range or domain name based on the policy type. The next line defines the destination port number, and the last line defines the protocol. You can use !Any to specify any protocol, or `TCP` or `UDP` to specify a specific protocol.

Please refer to the following examples to understand how to use access control:

```yaml
    policy: # policies for this client
      type: !WhiteList # !WhiteList or !BlackList
      policies: # list of policies
        - !Ip # policy based on the destination ip address
          - !Any # !Any means any agent, !Agent agent_name means the agent with the name agent_name
          - 192.168.0.1/24 # destination ip address
          - 22 # destination port
          - TCP # protocol
```

This example demonstrates a whitelist policy that allows the client to access all agents within the specified IP address range.
