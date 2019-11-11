using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using AngularCoreGym.Interface;
using AngularCoreGym.Models;

namespace AngularCoreGym.Concrete
{
    public class PropertyItemConcrete : IPropertyItem
    {
        private readonly DatabaseContext _context;
        private readonly IConfiguration _configuration;

        public PropertyItemConcrete(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            _configuration = config;
        }
        
        public List<PropertyItem> GetPropertyItemList()
        {
            var result = (from propertyItem in _context.PropertyItem
                          select propertyItem).ToList();

            return result;
        }
        
        public PropertyItem GetPropertyItembyId(int propertyItemId)
        {
            var result = (from propertyItem in _context.PropertyItem
                          where propertyItem.PropertyItemId == propertyItemId
                          select propertyItem).FirstOrDefault();

            return result;
        }
        /*
        public bool CheckSchemeNameExists(string schemeName)
        {
            var result = (from scheme in _context.SchemeMaster
                          where scheme.SchemeName == schemeName
                          select scheme).Count();

            return result > 0 ? true : false;
        }
        */
        public bool AddPropertyItem(PropertyItem propertyItem)
        {
            //var connectionString = _configuration.GetConnectionString("DatabaseConnection");

            _context.PropertyItem.Add(propertyItem);
            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        
        public bool UpdatePropertyItem(PropertyItem propertyItem)
        {
            var entity = GetPropertyItembyId(propertyItem.PropertyItemId);
            _context.Entry(entity).CurrentValues.SetValues(propertyItem);
            var result = _context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        
        public bool DeletePropertyItem(int propertyItemId)
        {
            var propertyitem = (from propertyItem in _context.PropertyItem
                                where propertyItem.PropertyItemId == propertyItemId
                                select propertyItem).FirstOrDefault();
            if (propertyitem != null)
            {
                _context.PropertyItem.Remove(propertyitem);
                var result = _context.SaveChanges();

                if (result > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        /*
        public List<SchemeMaster> GetActiveSchemeMasterList()
        {
            var result = (from scheme in _context.SchemeMaster
                          where scheme.Status == true
                select scheme).ToList();

            return result;

        }
        */
    }
}
