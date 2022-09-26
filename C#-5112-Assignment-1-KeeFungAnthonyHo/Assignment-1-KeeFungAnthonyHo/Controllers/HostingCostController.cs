using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Assignment_1_KeeFungAnthonyHo.Controllers
{
    /// <summary>
    /// QUESTION 6: Outputs three (3) strings that describe the total hosting costs.
    /// </summary>
    /// <param name="id"></param>
    /// <returns>Returns the total cost for hosting</returns>
    /// <example>
    /// GET string api/HostingCost/18 -> 2 fortnights at $5.50/FN = $11.00 CAD. HST 13% = $1.43 CAD. Total = $12.43 CAD.
    /// GET string api/HostingCost/42 -> 4 fortnights at $5.50/FN = $22.00 CAD. HST 13% = $2.86 CAD. Total = $24.86 CAD. 
    /// </example>

    public class HostingCostController : ApiController
    {
        int daysInFortnight = 14; // set variable for the number of nights that is considered one (1) Fortnight (FN);
        decimal fortnightCost = 5.50M; // set variable for the cost of one (1) FN;
        decimal tax = 0.13M; // set variable for the amount of tax;

        public string Get(int id)
        {
            decimal fortnights = (id + daysInFortnight) / daysInFortnight, // takes input of amount of days and adds 14 before dividing it by 14 to ensure 0 returns 1 fortnight for pricing;
                subTotal = fortnights * fortnightCost, // subTotal is the amount of fortnights multipled by the cost of a single fortnight;
                taxAmount = subTotal * tax, // taxAmount is subTotal multipled by 0.13 (13%) for the tax amount;
                total = taxAmount + subTotal; // total is the SUM of taxAmount and subTotal;
            return fortnights + " " + "fortnights at $" + fortnightCost.ToString("0.00") + "/FN = $" + subTotal.ToString("0.00") + " " + "CAD." +
                " " + "HST 13% = $" + taxAmount.ToString("0.00") + " " + "CAD." +
                " " + "Total = $" + total.ToString("0.00") + " " + "CAD.";
            // returns the 3 strings with the variables rounded to the second decimal place via n.ToString("0.00");
        }
    }
}
