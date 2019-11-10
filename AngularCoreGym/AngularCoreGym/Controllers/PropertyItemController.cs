using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularCoreGym.Interface;
using AngularCoreGym.Models;
using AngularCoreGym.ViewModels;

namespace AngularCoreGym.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyItemController : ControllerBase
    {
        private readonly IPropertyItem _propertyItem;
        public PropertyItemController(IPropertyItem propertyItem)
        {
            _propertyItem = propertyItem;
        }
        /*
        // GET: api/Scheme
        [HttpGet]
        public List<SchemeMaster> Get()
        {
            return _schemeMaster.GetSchemeMasterList();
        }

        // GET: api/Scheme/5
        [HttpGet("{id}", Name = "GetScheme")]
        public SchemeMaster Get(int id)
        {
            return _schemeMaster.GetSchemeMasterbyId(id);
        }
        */
        // POST: api/Scheme
        [HttpPost]
        public HttpResponseMessage Post([FromBody] PropertyItem propertyItem)
        {
            if (ModelState.IsValid)
            {
                var userId = this.User.FindFirstValue(ClaimTypes.Name);

                propertyItem.CreatedDate = DateTime.Now;
                propertyItem.ModifiedDate = DateTime.Now;
                propertyItem.CreatedBy = userId;
                propertyItem.ModifiedBy = userId;
                _propertyItem.AddPropertyItem(propertyItem);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
            }
            else
            {
                var response = new HttpResponseMessage()
                {

                    StatusCode = HttpStatusCode.BadRequest
                };

                return response;
            }
        }
        /*
        // PUT: api/Scheme/5
        [HttpPut("{id}")]
        public HttpResponseMessage Put(int id, [FromBody] SchemeMasterEditViewModel schemeMaster)
        {
            if (string.IsNullOrWhiteSpace(Convert.ToString(id)) || schemeMaster == null)
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.BadRequest
                };
                return response;
            }
            else
            {
                var temp = AutoMapper.Mapper.Map<SchemeMaster>(schemeMaster);
                var result = _schemeMaster.UpdateSchemeMaster(temp);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };
                return response;
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public HttpResponseMessage Delete(int id)
        {
            var result = _schemeMaster.DeleteScheme(id);

            if (result)
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };
                return response;
            }
            else
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.BadRequest
                };
                return response;
            }
        }
        */
    }
}
