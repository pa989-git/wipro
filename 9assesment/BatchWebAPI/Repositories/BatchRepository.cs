using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

public class BatchRepository : IBatchRepository
{
    private readonly AppDbContext _context;

    public BatchRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Batch>> GetAllBatches() => await _context.Batches.ToListAsync();

    public async Task<Batch> GetBatchById(int id) => await _context.Batches.FindAsync(id);

    public async Task<Batch> AddBatch(Batch batch)
    {
        _context.Batches.Add(batch);
        await _context.SaveChangesAsync();
        return batch;
    }

    public async Task<Batch> UpdateBatch(Batch batch)
    {
        _context.Batches.Update(batch);
        await _context.SaveChangesAsync();
        return batch;
    }

    public async Task<bool> DeleteBatch(int id)
    {
        var batch = await _context.Batches.FindAsync(id);
        if (batch == null) return false;

        _context.Batches.Remove(batch);
        await _context.SaveChangesAsync();
        return true;
    }
}
