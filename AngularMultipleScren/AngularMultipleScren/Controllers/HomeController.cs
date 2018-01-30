using AngularMultipleScren.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularMultipleScren.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public string Insert_Employee(Employee Employe)
        {
            if (Employe != null)
            {
                using (EmployeeEntities Obj = new EmployeeEntities())
                {
                    Obj.Employees.Add(Employe);
                    Obj.SaveChanges();
                    return "Employee Added Successfully";
                }
            }
            else
            {
                return "Employee Not Inserted! Try Again";
            }
        }
        [HttpPost]
        public string Update_Employee(Employee Employe)
        {

            TempData["Employe"] = Employe;
            return "Navigate";
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public JsonResult PopulateData()
        {
            return Json(TempData["Employe"], JsonRequestBehavior.AllowGet);
        }
        public JsonResult Get_AllEmployee()
        {
            using (EmployeeEntities Obj = new EmployeeEntities())
            {
                List<Employee> Emp = Obj.Employees.ToList();
                return Json(Emp, JsonRequestBehavior.AllowGet);
            }
        }
    }
}