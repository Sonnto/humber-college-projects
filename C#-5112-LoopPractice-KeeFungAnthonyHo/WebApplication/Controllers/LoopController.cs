using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication.Controllers
{
    public class LoopController : ApiController
    {
        //get: api/loop/whileloop
        /// <summary>
        /// counting function
        /// </summary>
        /// <returns>the numbers one through ten</returns>
        /// <example>
        /// GET: api/loop/whileloop -> 4,8,12,16,20
        /// </example>
        [HttpGet]
        //[Route("api/loop/whileloop")]
        public string WhileLoop()
        {
            string message = "";
            int incrementor = 4;
            string delimiter = ",";
            int limit = 20;
            int step = 4;

            while (incrementor <= limit)
            {
                if (incrementor == limit)
                {
                    delimiter = ""; // no comma
                }
                message = message + incrementor.ToString() + delimiter; // comma
                
                incrementor = incrementor + step;
            }
            return message;
        }

        //get: api/loop/forloop
        /// <summary>
        /// counter function
        /// </summary>
        /// <returns>counts from 1 to 10</returns>
        /// <example>
        /// GET: api/loop/forloop -> 2520151050-5
        /// </example>
        [HttpGet]
        public string ForLoop()
        {
            string message = "";
            //three things: incrementor; exit condition; incrementing step
            for (int i = 25; i >= -5; i-=5)
            {
                message = message + i.ToString();
            }

            return message;
        }

        //get: api/loop/foreachloop
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        /// <example>
        /// GET: 
        /// </example>
        [HttpGet]
        public string ForEachLoop()
        {
            return "Testing";
        }

    }
}
