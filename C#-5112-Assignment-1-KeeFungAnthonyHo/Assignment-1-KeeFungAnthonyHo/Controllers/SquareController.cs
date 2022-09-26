using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Assignment_1_KeeFungAnthonyHo.Controllers
{
    public class SquareController : ApiController
    {
        /// <summary>
        /// QUESTION 2: takes the input number and squares it;
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Returns input number, squared.</returns>
        /// <example>
        /// GET int api/Square/10 -> 100
        /// GET int api/Square/2 -> 4
        /// </example>
        public int Get(int id)
        {
            int squared = id * id;
            return squared;
        }
    }
}
