using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Assignment_1_KeeFungAnthonyHo.Controllers
{
    public class GreetingController : ApiController
    {
        /// <summary>
        /// QUESTION 3: Displays "Hello, World!"
        /// </summary>
        /// <returns>Returns "Hello, World!"</returns>
        /// <example>
        /// curl -d "" localhost:xxxxx/api/Greeting
        /// POST api/Greeting -> "Hello, World!"
        /// </example>
        public string Post()
        {
            return "Hello, World!";
        }
        /// <summary>
        /// QUESTION 4: Displays greeting to an input number of amount of people
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns a greeting to a number of people inputted by user</returns>
        /// <example>
        /// POST /api/Greeting/2 -> "Greetings to 2 people!"
        /// POST /api/Greeting/4 -> "Greetings to 4 people!"
        /// </example>

        public string Post(int id)
        {
            return "Greetings to " + id + " people!";
        }
    }
}
