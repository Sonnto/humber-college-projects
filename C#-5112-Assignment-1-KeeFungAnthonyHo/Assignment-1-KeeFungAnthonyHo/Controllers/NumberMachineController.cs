using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Assignment_1_KeeFungAnthonyHo.Controllers
{
    public class NumberMachineController : ApiController
    {
        /// <summary>
        /// QUESTION 5: Takes input number and applies four (4) mathematical equations applied to it
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns an input number has had four (4) mathemtical equations applied to it</returns>
        /// <example>
        /// GET int api/NumberMachine/10 -> 140
        /// GET int api/NumberMachine/4 -> 56
        /// </example>
        public int Get(int id)
        {
            int result = id * id + 100 / 2 - 10;
            return result;
        }
    }
}
